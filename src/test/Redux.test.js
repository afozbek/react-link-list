import {
  addLink,
  deleteLink,
  downVote,
  upVote,
} from '../store/linkList/actions';

import { clearNotify, notify } from '../store/notification/actions';
import { CLEAR_NOTIFY, NOTIFY } from '../store/notification/types';

import {
  ADD_LINK,
  DELETE_LINK,
  UP_VOTE_LINK,
  DOWN_VOTE_LINK,
} from '../store/linkList/types';

import { linkListReducer } from '../store/linkList/reducer';
import { notificationReducer } from '../store/notification/reducer';

describe('actions', () => {
  it('should create an action to add a link', () => {
    const link = { id: 1, text: 'Deneme', created_time: new Date().getTime() };
    const expectedAction = {
      type: ADD_LINK,
      payload: link,
    };
    expect(addLink(link)).toEqual(expectedAction);
  });

  it('should create an action to delete a link', () => {
    const id = 1;
    const expectedAction = {
      type: DELETE_LINK,
      payload: id,
    };
    expect(deleteLink(id)).toEqual(expectedAction);
  });

  it('should create an action to upVote a link', () => {
    const id = 1;
    const expectedAction = {
      type: UP_VOTE_LINK,
      payload: id,
    };
    expect(upVote(id)).toEqual(expectedAction);
  });

  it('should create an action to downVote a link', () => {
    const id = 1;
    const expectedAction = {
      type: DOWN_VOTE_LINK,
      payload: id,
    };
    expect(downVote(id)).toEqual(expectedAction);
  });

  it('should create an action to notify', () => {
    const text = 'Başarılı bir şekilde oluştu.';
    const expectedAction = {
      type: NOTIFY,
      payload: text,
    };
    expect(notify(text)).toEqual(expectedAction);
  });

  it('should create an action to clear notify', () => {
    const expectedAction = {
      type: CLEAR_NOTIFY,
    };
    expect(clearNotify()).toEqual(expectedAction);
  });
});

const initialState = JSON.parse(localStorage.getItem('linkList')) || [];

describe('Reducers', () => {
  it('should return the initial state', () => {
    expect(linkListReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle addLink', () => {
    expect(
      linkListReducer([], {
        type: ADD_LINK,
        payload: { id: 1, text: 'Deneme' },
      })
    ).toEqual([{ id: 1, text: 'Deneme' }]);
  });

  it('should handle removeLink', () => {
    const newState = linkListReducer([{ id: 1, text: 'Deneme' }], {
      type: DELETE_LINK,
      payload: { id: 1 },
    });
    console.log(newState);

    expect(
      linkListReducer([{ id: 1, text: 'Deneme' }], {
        type: DELETE_LINK,
        payload: 1,
      })
    ).toEqual([]);
  });

  it('should handle upvote link', () => {
    expect(
      linkListReducer(
        [
          { id: 1, text: 'Deneme', points: 0 },
          { id: 2, text: 'Deneme1', points: 1 },
        ],
        {
          type: UP_VOTE_LINK,
          payload: 2,
        }
      )
    ).toEqual([
      { id: 1, text: 'Deneme', points: 0 },
      { id: 2, text: 'Deneme1', points: 2 },
    ]);
  });

  it('should handle downVote link', () => {
    expect(
      linkListReducer(
        [
          { id: 1, text: 'Deneme', points: 0 },
          { id: 2, text: 'Deneme1', points: 1 },
        ],
        {
          type: DOWN_VOTE_LINK,
          payload: 2,
        }
      )
    ).toEqual([
      { id: 1, text: 'Deneme', points: 0 },
      { id: 2, text: 'Deneme1', points: 0 },
    ]);
  });

  it('should handle downVote link-2', () => {
    expect(
      linkListReducer(
        [
          { id: 1, text: 'Deneme', points: 0 },
          { id: 2, text: 'Deneme1', points: 0 },
        ],
        {
          type: DOWN_VOTE_LINK,
          payload: 2,
        }
      )
    ).toEqual([
      { id: 1, text: 'Deneme', points: 0 },
      { id: 2, text: 'Deneme1', points: 0 },
    ]);
  });

  const notificationInitialState = {
    showNotification: false,
    text: '',
    displayTime: 2000,
  };
  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(
      notificationInitialState
    );
  });

  it('should handle notify', () => {
    expect(
      notificationReducer(
        {
          showNotification: false,
          text: '',
          displayTime: 2000,
        },
        {
          type: NOTIFY,
          payload: 'TEXT',
        }
      )
    ).toEqual({
      showNotification: true,
      text: 'TEXT',
      displayTime: 2000,
    });
  });

  it('should handle clear notify', () => {
    expect(
      notificationReducer(
        {
          showNotification: false,
          text: '',
          displayTime: 2000,
        },
        {
          type: CLEAR_NOTIFY,
        }
      )
    ).toEqual(notificationInitialState);
  });
});
