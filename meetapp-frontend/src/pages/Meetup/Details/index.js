import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';

import { MdDeleteForever, MdEdit, MdPlace, MdEvent } from 'react-icons/md';

import {
  Container,
  Cover,
  Description,
  DescriptionDetails,
  Header,
  HeaderButtons,
} from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function Details({ match }) {
  const [meetup, setMeetup] = useState([]);
  const meetupId = match.params.id;

  function dateFormatted(date) {
    return date
      ? format(parseISO(date), "dd 'de' MMMM yyyy', às' HH:mm'h'", {
          locale: pt,
        })
      : null;
  }

  async function cancelMeetup() {
    try {
      await api.delete(`meetups/${meetupId}`);
      toast.success('O meetup foi cancelado com sucesso');
      history.push('/dashboard');
    } catch (error) {
      toast.error('Não foi possível cancelar o meetup');
    }
  }

  useEffect(() => {
    async function loadMeetup() {
      try {
        const { data } = await api.get(`meetups/${meetupId}`);

        setMeetup(data);
      } catch (error) {
        toast.error('Falha ao carregar o meetup');
      }
    }

    loadMeetup();
  }, [meetupId]);

  return (
    <Container>
      <Header>
        <h1>{meetup.title}</h1>
        <HeaderButtons>
          <Link to={`/meetup/${meetup.id}/edit`}>
            <button id="edit" type="submit" disabled={meetup.past}>
              <MdEdit size={20} />
              <div>Editar</div>
            </button>
          </Link>
          <button
            id="delete"
            type="submit"
            onClick={() => cancelMeetup()}
            disabled={meetup.past}
          >
            <MdDeleteForever size={20} />
            <div>Apagar</div>
          </button>
        </HeaderButtons>
      </Header>

      <Cover>
        <img
          src={
            meetup.banner
              ? meetup.banner.url
              : 'http://www.catoca.com/wp-content/themes/images/no-image-found-360x260.png'
          }
          alt="Meetup Banner"
        />
      </Cover>

      <Description>
        <p>{meetup.description}</p>

        <DescriptionDetails>
          <div>
            <MdEvent /> <span>{dateFormatted(meetup.date)}</span>
          </div>
          <div>
            <MdPlace /> <span>{meetup.location}</span>
          </div>
        </DescriptionDetails>
      </Description>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
