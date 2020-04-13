import axios from 'axios';
import { LOG_IN, LOGIN_FAIL } from './types';
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
    dispatch({ type: LOGIN_FAIL });
  }
};
