import { NOTIFY, CLEAR_NOTIFY } from './types';

const initialState = { showNotification: false, text: '', displayTime: 1500 };

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFY:
      return notify(state, action.payload);

    case CLEAR_NOTIFY:
      return clearNotify();

    default:
      return state;
  }
};

const notify = (state, text) => {
  return {
    ...state,
    showNotification: true,
    text,
  };
};

const clearNotify = () => {
  return initialState;
};
