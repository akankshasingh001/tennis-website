import { combineReducers } from 'redux';
import authenticationUser from './authenticationUser';
import profile from './profile';

export default combineReducers({
  auth: authenticationUser,
  profile
});
