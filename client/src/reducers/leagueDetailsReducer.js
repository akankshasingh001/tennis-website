import { LEAGUE_DETAILS } from '../actions/types';

const initialState = { league: null };

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LEAGUE_DETAILS:
      return {
        ...state,
        league: payload
      };
    default:
      return state;
  }
};
