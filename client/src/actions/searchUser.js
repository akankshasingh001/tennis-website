import axios from 'axios';
import { SEARCH_USER, AUTH_ERROR } from './types';

const searchUser = () => async dispatch => {
  try {
    const res = await axios.get('api/searchUser');
    dispatch({ type: SEARCH_USER, payload: res.data });
  } catch (error) {
    dispatch({ type: AUTH_ERROR });
  }
};

export default searchUser;
