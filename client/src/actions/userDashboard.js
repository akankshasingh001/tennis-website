import axios from 'axios';
import { USER_DASHBOARD, AUTH_ERROR } from './types';

const getCurrentUserDashboard = () => async dispatch => {
  try {
    const res = await axios.get('api/getUser');
    dispatch({ type: USER_DASHBOARD, payload: res.data });
  } catch (error) {
    dispatch({ type: AUTH_ERROR });
  }
};

export default getCurrentUserDashboard;
