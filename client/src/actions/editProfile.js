import axios from 'axios';
import { EDIT_PROFILE, AUTH_ERROR } from './types';

const editProfile = () => async dispatch => {
  try {
    const res = await axios.get('api/currentUserDashboard/me');
    dispatch({ type: EDIT_PROFILE, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

export default editProfile;
