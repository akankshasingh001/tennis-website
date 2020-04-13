import {
  LOG_IN,
  USER_LOADED,
  LOG_OUT,
  REGISTER_SUCCESS
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOG_IN:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case LOG_OUT: {
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      };
    }
    case USER_LOADED: {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    }
    default:
      return state;
  }
};
