import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL } from './types';

export const register = ({
  firstName,
  lastName,
  email,
  gender,
  city,
  zipcode,
  password
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({
    firstName,
    lastName,
    email,
    gender,
    city,
    zipcode,
    password
  });

  try {
    const res = await axios.post('/api/registration', body, config);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: REGISTER_FAIL });
  }
};
