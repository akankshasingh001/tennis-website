import axios from 'axios';
import { ERROR, GET_PROFILE, EDIT_PROFILE } from './types';
//import { setAlert } from '../actions/alert';

// const createProfile = formData => async dispatch => {
//   try {
//     const config = { headers: { 'Content-Type': 'application/json' } };
//     const res = await axios.post('/api/profile', config, formData);
//     dispatch({ type: CREATE_PROFILE, payload: res.data });
//   } catch (err) {
//     dispatch({ type: ERROR });
//   }
// };

// export default createProfile;

//Get current Profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/getUserProfile/me');
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

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
