import { combineReducers } from 'redux';
import authenticationUser from './authenticationUser';
import profile from './profile';
import createProfileReducer from './createProfileReducer';

export default combineReducers({
  auth: authenticationUser,
  profile,
  createProfile: createProfileReducer
});
