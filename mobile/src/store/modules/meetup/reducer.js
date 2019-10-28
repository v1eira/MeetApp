import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/SUBSCRIBE_REQUEST':
      case '@meetup/CANCEL_SUBSCRIPTION_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@meetup/SUBSCRIBE_SUCCESS':
      case '@meetup/SUBSCRIBE_FAILURE':
      case '@meetup/CANCEL_SUBSCRIPTION_SUCCESS':
      case '@meetup/CANCEL_SUBSCRIPTION_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}

export default meetup;
