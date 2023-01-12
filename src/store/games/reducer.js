import { SET_GAMES } from './types';

const initialState = {
  games: [],
};

export const games = (state = initialState, action) => {
  switch (action.type) {
    case SET_GAMES:
      return {
        ...state,
        games: action.payload,
      };

    default:
      return state;
  }
};