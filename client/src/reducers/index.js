import { combineReducers } from 'redux';
import authenticationUser from './authenticationUser';
import profile from './profile';
import createProfileReducer from './createProfileReducer';
import searchUser from './searchUser';
import leagueDetailsReducer from './leagueDetailsReducer';

export default combineReducers({
  auth: authenticationUser,
  profile,
  createProfile: createProfileReducer,
  search: searchUser,
  league: leagueDetailsReducer
});
