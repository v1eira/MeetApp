import { Alert } from 'react-native';
import { all, put, call, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';

import {
  subscribeSuccess,
  subscribeFailure,
  cancelSubscriptionSuccess,
  cancelSubscriptionFailure,
} from './actions';

export function* subscribe({ payload }) {
  try {
    yield call(api.post, `meetups/${payload.id}/subscriptions`);

    Alert.alert('Sucesso!', 'Inscrição realizada com sucesso.');

    yield put(subscribeSuccess());
  } catch (err) {
    Alert.alert('Erro ao realizar inscrição', err.response.data.error);

    yield put(subscribeFailure());
  }
}

export function* cancelSubscription({ payload }) {
  const { id, data } = payload;

  try {
    yield call(api.put, `meetups/${id}`, data);

    Alert.alert('Inscrição cancelada', 'Você não participará desse evento.');

    yield put(cancelSubscriptionSuccess());
  } catch (err) {
    Alert.alert('Erro ao cancelar inscrição', err.response.data.error);

    yield put(cancelSubscriptionFailure());
  }
}

export default all([
  takeLatest('@meetup/SUBSCRIBE_REQUEST', subscribe),
  takeLatest('@meetup/CANCEL_SUBSCRIPTION_REQUEST', cancelSubscription),
]);
