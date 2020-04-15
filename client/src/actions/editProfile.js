import axios from 'axios';
import { EDIT_PROFILE, AUTH_ERROR, EDIT_ACCOUNT } from './types';

export const getUserProfile = () => async dispatch => {
  try {
    const res = await axios.get('api/getUserProfile/me');
    dispatch({ type: EDIT_PROFILE, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

export const editUserAccount = () => async dispatch => {
  try {
    const res = await axios.post('api/account');
    dispatch({ type: EDIT_ACCOUNT, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

// export const editUserProfile = ()=> async dispatch=>{
//   try {
//     const res = await axios.post('api/profile');
//     dispatch({})
//   } catch (err) {
//     dispatch({type:AUTH_ERROR})
//   }
// }

// export default getUserProfile;
