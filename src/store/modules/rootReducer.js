/*----------------------------------------------------------------------------
Imports
----------------------------------------------------------------------------*/

import { combineReducers } from 'redux';

import teamsReducer from './teams/reducer';

export default combineReducers({
  teams: teamsReducer,
});
