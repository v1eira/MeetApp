import { Op } from 'sequelize';

import User from '../models/User';
import File from '../models/File';
import Meetup from '../models/Meetup';
import Subscription from '../models/Subscription';
import Notification from '../schemas/Notification';

import SubscriptionMail from '../jobs/SubscriptionMail';
import SubscriptionCancellationMail from '../jobs/SubscriptionCancellationMail';
import Queue from '../../lib/Queue';

class SubscriptionController {
  async index(req, res) {
    const subscriptions = await Subscription.findAll({
      where: {
        user_id: req.userId,
      },
      include: [
        {
          model: Meetup,
          where: {
            date: {
              [Op.gt]: new Date(),
            },
          },
          required: true,
          include: [
            {
              model: File,
              as: 'banner',
              attributes: ['id', 'url', 'path'],
            },
            {
              model: User,
              as: 'user',
            },
          ],
        },
      ],
      order: [[Meetup, 'date']],
    });

    return res.json(subscriptions);
  }

  async store(req, res) {
    const user = await User.findByPk(req.userId);
    const meetup = await Meetup.findByPk(req.params.meetupId, {
      include: [User],
    });
    const subscriptionExists = await Subscription.findOne({
      where: { meetup_id: req.params.meetupId },
    });

    if (subscriptionExists) {
      return res
        .status(400)
        .json({ error: 'Can not subscribe to the same meetup twice.' });
    }

    if (meetup.user_id === req.userId) {
      return res
        .status(400)
        .json({ error: 'Can not subscribe to your own meetups.' });
    }

    if (meetup.past) {
      return res
        .status(400)
        .json({ error: 'Can not subscribe to past meetups.' });
    }

    const checkDate = await Subscription.findOne({
      where: {
        user_id: user.id,
      },
      include: [
        {
          model: Meetup,
          required: true,
          where: {
            date: meetup.date,
          },
        },
      ],
    });

    if (checkDate) {
      return res
        .status(400)
        .json({ error: 'Can not subscribe to two meetups at the same time.' });
    }

    const subscription = await Subscription.create({
      user_id: user.id,
      meetup_id: meetup.id,
    });

    /* Add Notification */
    await Notification.create({
      content: `${user.name} se inscreveu em ${meetup.title}`,
      user: meetup.user_id,
    });

    /* Send mail */
    await Queue.add(SubscriptionMail.key, {
      meetup,
      user,
    });

    return res.json(subscription);
  }

  async delete(req, res) {
    const subscription = await Subscription.findByPk(req.params.id);
    const meetup = await Meetup.findByPk(subscription.meetup_id);
    const user = await User.findByPk(req.userId);

    if (meetup.past) {
      return res
        .status(400)
        .json({ error: 'Can not unsubscribe to past meetups.' });
    }

    if (subscription.user_id !== req.userId) {
      return res.status(401).json({
        error: 'You do not have permission to unsubscribe to this meetup.',
      });
    }

    await subscription.destroy();

    /* Send mail */
    await Queue.add(SubscriptionCancellationMail.key, {
      meetup,
      user,
    });

    return res.json();
  }
}

export default new SubscriptionController();
