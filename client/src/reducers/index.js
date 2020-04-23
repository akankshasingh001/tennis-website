import { combineReducers } from 'redux';
import authenticationUser from './authenticationUser';
import profile from './profile';

import searchUser from './searchUser';
import leagueDetailsReducer from './leagueDetailsReducer';

export default combineReducers({
  auth: authenticationUser,
  profile,
  search: searchUser,
  league: leagueDetailsReducer
});
