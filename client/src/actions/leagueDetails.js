import axios from 'axios';
import { LEAGUE_DETAILS, ERROR } from './types';

const leagueDetails = () => async dispatch => {
  try {
    const res = await axios.get('adminApi/getLeagueDetails');
    dispatch({ type: LEAGUE_DETAILS, payload: res.data });
  } catch (err) {
    dispatch({ type: ERROR });
  }
};

export default leagueDetails;
