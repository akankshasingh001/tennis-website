import axios from 'axios';
import { SEARCH_USER, ERROR } from './types';

const searchUser = formData => async dispatch => {
  try {
    const res = await axios.get(
      `api/searchUser?firstName=${formData.fname}&lastName=${formData.lname}`
    );
    dispatch({ type: SEARCH_USER, payload: res.data });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export default searchUser;
