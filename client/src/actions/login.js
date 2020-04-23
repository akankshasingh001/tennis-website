import axios from 'axios';
import { LOG_IN, ERROR, CLEAR_PROFILE, LOG_OUT } from './types';
import loadUserAfterLogin from './afterLogin';

export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/login', body, config);
    dispatch({ type: LOG_IN, payload: res.data });

    dispatch(loadUserAfterLogin());
  } catch (err) {
    dispatch({ type: ERROR });
  }
};

//LOGOUT and clear Profile
export const logout = () => dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOG_OUT });
};
