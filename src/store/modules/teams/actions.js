/*----------------------------------------------------------------------------
Imports
----------------------------------------------------------------------------*/
import * as types from '../types';

/*----------------------------------------------------------------------------
Functions
----------------------------------------------------------------------------*/
export function saveTeamRequest(payload) {
  return {
    type: types.SAVE_TEAM_REQUEST,
    payload,
  };
}

export function deleteTeamRequest(payload) {
  return {
    type: types.DELETE_TEAM_REQUEST,
    payload,
  };
}
