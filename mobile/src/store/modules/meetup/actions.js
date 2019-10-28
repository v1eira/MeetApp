export function subscribeRequest(id) {
  return {
    type: '@meetup/SUBSCRIBE_REQUEST',
    payload: { id },
  };
}

export function subscribeSuccess() {
  return {
    type: '@meetup/SUBSCRIBE_SUCCESS',
  };
}

export function subscribeFailure() {
  return {
    type: '@meetup/SUBSCRIBE_FAILURE',
  };
}

export function cancelSubscriptionRequest(id) {
  return {
    type: '@meetup/CANCEL_SUBSCRIPTION_REQUEST',
    payload: { id },
  };
}

export function cancelSubscriptionSuccess() {
  return {
    type: '@meetup/CANCEL_SUBSCRIPTION_SUCCESS',
  };
}

export function cancelSubscriptionFailure() {
  return {
    type: '@meetup/CANCEL_SUBSCRIPTION_FAILURE',
  };
}
