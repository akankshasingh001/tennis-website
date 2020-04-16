import axios from 'axios';
import { EDIT_PROFILE, AUTH_ERROR, EDIT_ACCOUNT, USER_PROFILE } from './types';

export const getUserProfile = () => async dispatch => {
  try {
    const res = await axios.get('api/getUserProfile/me');
    dispatch({ type: USER_PROFILE, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

export const editUserAccount = formData => async dispatch => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const res = await axios.post('api/account', formData, config);
    alert(`Account Updated ${res}`);
    dispatch({ type: EDIT_ACCOUNT, payload: res.data });
    alert(`Account Updated ${res}`);
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};
