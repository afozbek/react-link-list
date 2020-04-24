import { NOTIFY, CLEAR_NOTIFY } from './types';

export const notify = (text) => ({
  type: NOTIFY,
  payload: text,
});

export const clearNotify = () => ({
  type: CLEAR_NOTIFY,
});
