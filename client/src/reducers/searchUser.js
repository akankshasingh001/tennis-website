import { SEARCH_USER } from '../actions/types';

const initialState = {
  user: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SEARCH_USER:
      return {
        ...state,
        user: payload
      };
    default:
      return state;
  }
};
