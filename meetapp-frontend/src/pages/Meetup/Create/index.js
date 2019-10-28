import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { MdAddCircleOutline } from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import BannerInput from '../BannerInput';
import DatePicker from '~/components/DatePicker';

import { Container } from './styles';

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

export default function Create() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(data) {
    setLoading(true);

    try {
      const response = await api.post('meetups', data);
      const { id } = response.data;

      toast.success('Meetup criado com sucesso');
      setLoading(false);

      history.push(`/meetup/${id}`);
    } catch (err) {
      toast.error('Erro ao criar Meetup, confira os dados');
      setLoading(false);
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="file_id" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
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
    </Container>
  );
}
