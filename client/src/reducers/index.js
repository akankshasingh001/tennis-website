import { combineReducers } from 'redux';
import authenticationUser from './authenticationUser';

export default combineReducers({
  auth: authenticationUser
});
