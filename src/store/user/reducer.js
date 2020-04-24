import { GET_USERS } from './types';

const initialState = [];

export const userReducer = (state=initialState, action) => {
  switch(action.type) {
    case GET_USERS: return getUsers(action.payload);

    default: return state;
  }
}

const getUsers = (users) => {
  const newState = [...users];

  return newState;
}