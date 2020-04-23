import axios from 'axios';
import { ERROR, EDIT_PROFILE } from './types';

//Create or Update Profile
export const createProfile = formData => async dispatch => {
  try {
    const config = { headers: { 'Content-Type': 'application/json' } };
    const res = await axios.post('/api/profile', formData, config);
    dispatch({ type: EDIT_PROFILE, payload: res.data });
  } catch (err) {
    dispatch({
      type: ERROR
    });
  }
};
