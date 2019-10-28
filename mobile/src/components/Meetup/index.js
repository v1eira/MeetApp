import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useSelector } from 'react-redux';

import {
  Container,
  Banner,
  Content,
  Title,
  Info,
  Row,
  DateTime,
  Location,
  Organizer,
  ActionButton,
} from './styles';

function Meetup({ data, visible, action, onPress }) {
  const dateFormatted = useMemo(() => {
    return format(parseISO(data.date), "d 'de' MMMM', às' H'h'", {
      locale: pt,
    });
  }, [data.date]);

  const loading = useSelector(state => state.meetup.loading);

  return (
    <Container>
      <Banner
        source={{ uri: data.banner.url }}
        // TODO: Backend should generate a smaller image for faster loading
        smallSource={{ uri: data.banner.url }}
        shouldLoad={visible}
      />

      <Content>
        <Title>{data.title}</Title>

        <Info>
          <Row>
            <Icon name="event" size={14} color="#999" />
            <DateTime>{dateFormatted}</DateTime>
          </Row>
          <Row>
            <Icon name="place" size={14} color="#999" />
            <Location>{data.location}</Location>
          </Row>
          <Row>
            <Icon name="person" size={14} color="#999" />
            <Organizer>Organizador: {data.user.name}</Organizer>
          </Row>
        </Info>

        <ActionButton onPress={onPress}>
          {loading ? 'Processando' : action}
        </ActionButton>
      </Content>
    </Container>
  );
}

Meetup.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
    }),
    banner: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  visible: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
};

Meetup.defaultProps = {
  visible: true,
};

export default Meetup;
