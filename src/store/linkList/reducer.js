import {
  GET_LINK_LIST,
  ADD_LINK,
  UP_VOTE_LINK,
  DOWN_VOTE_LINK,
  DELETE_LINK,
} from './types';

const initialState = [];

export const linkListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LINK_LIST:
      return getLinkList(action.payload);

    case ADD_LINK:
      return addLink(state, action.payload);

    case UP_VOTE_LINK:
      return upVoteLink(state, action.payload);

    case DOWN_VOTE_LINK:
      return downVoteLink(state, action.payload);

    case DELETE_LINK:
      return deleteLink(state, action.payload);
    default:
      return state;
  }
};

const getLinkList = (linkList) => {
  const newState = [...linkList];

  return newState;
};

const addLink = (state, link) => {
  return [...state, link];
};

const upVoteLink = (state, id) => {
  return state.map((link) => {
    if (link.id === id) {
      link.points += 1;
    }
    return link;
  });
};

const downVoteLink = (state, id) => {
  return state.map((link) => {
    if (link.id === id) {
      link.points -= 1;
    }
    return link;
  });
};

const deleteLink = (state, id) => {
  return state.filter((link) => link.id !== id);
};
