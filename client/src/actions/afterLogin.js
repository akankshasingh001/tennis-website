import axios from 'axios';
import { USER_LOADED, AUTH_ERROR } from './types';
import setAuthToken from '../utils/setAuthToken';

const loadUserAfterLogin = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/login');
    dispatch({ type: USER_LOADED, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

export default loadUserAfterLogin;
