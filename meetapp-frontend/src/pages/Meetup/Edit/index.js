import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { parseISO } from 'date-fns';

import { MdAddCircleOutline } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import BannerInput from '../BannerInput';
import DatePicker from '~/components/DatePicker';

import { Container, Loading } from './styles';

const schema = Yup.object().shape({
  file_id: Yup.number()
    .transform(value => (!value ? undefined : value))
    .required('Insira o banner do Meetup'),
  title: Yup.string()
    .min(6, 'Mínimo 6 caracteres')
    .required('O título é obrigatório'),
  description: Yup.string()
    .max(255, 'Máximo 255 caracteres')
    .required('O e-mail é obrigatório'),
  date: Yup.date().required('A data é obrigatória'),
  location: Yup.string().required('A localização é obrigatória'),
});

export default function Edit({ match }) {
  const { id } = match.params;

  const [loading, setLoading] = useState(false);
  const [meetup, setMeetup] = useState(null);

  useEffect(() => {
    async function loadMeetup() {
      try {
        const response = await api.get(`/meetups/${id}`);

        const data = {
          ...response.data,
          date: parseISO(response.data.date),
        };

        setMeetup(data);
      } catch (err) {
        toast.error('Meetup não encontrado');
        history.push('/');
      }
    }

    loadMeetup();
  }, [id]);

  async function handleSubmit(data) {
    setLoading(true);

    try {
      await api.put(`/meetups/${id}`, data);

      toast.success('Meetup atualizado com sucesso');
      setLoading(false);

      history.push(`/meetup/${id}`);
    } catch (err) {
      toast.error('Erro ao atualizar Meetup, confira os dados');
      setLoading(false);
    }
  }

  return (
    <Container>
      {!meetup ? (
        <Loading>Carregando...</Loading>
      ) : (
        <Form schema={schema} initialData={meetup} onSubmit={handleSubmit}>
          <BannerInput name="file_id" />
          <Input name="title" placeholder="Título do Meetup" />
          <Input
            multiline
            name="description"
            placeholder="Descrição completa"
          />
          <DatePicker
            name="date"
            autoComplete="off"
            placeholder="Data do meetup"
          />
          <Input name="location" placeholder="Localização" />

          <button id="save" type="submit" disabled={loading}>
            <MdAddCircleOutline size={22} color="#FFF" />
            Salvar meetup
          </button>
        </Form>
      )}
    </Container>
  );
}

Edit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
