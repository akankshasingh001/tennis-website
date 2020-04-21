import {
  USER_DASHBOARD,
  EDIT_PROFILE,
  EDIT_ACCOUNT,
  USER_PROFILE,
  SEARCH_USER
} from '../actions/types';

const initialState = {
  isAuthenticated: null,
  profile: '',
  loading: true,
  user: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_PROFILE:
      return {
        ...state,
        profile: payload,
        isAuthenticated: true,
        loading: false
      };
    case USER_DASHBOARD:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false
      };
    case SEARCH_USER:
      return {
        ...state,
        user: payload,
        loading: false
      };

    case EDIT_ACCOUNT:
      return {
        ...state,
        user: payload,
        loading: false,
        isAuthenticated: true
      };
    case EDIT_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    default:
      return state;
  }
};
