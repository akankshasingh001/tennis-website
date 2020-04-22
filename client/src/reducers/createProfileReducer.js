import { CREATE_PROFILE, GET_PROFILE } from '../actions/types';

const initialState = {
  profile: null,
  loading: true,
  error: {}
};
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case CREATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    default:
      return state;
  }
};
