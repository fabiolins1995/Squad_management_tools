/*----------------------------------------------------------------------------
Imports
----------------------------------------------------------------------------*/
import * as types from '../types';

/*----------------------------------------------------------------------------
Constants
----------------------------------------------------------------------------*/
const initialState = {
  teams: [
    {
      id: 1,
      teamName: 'Juventus',
      description: 'Squad Juve 2021-22',
      teamWebsite: 'https://www.juventus.com/it',
      teamType: 'Real',
      tags: 'Italian; CR7; ItalianChampion2021;',
      formation: '4 - 3 - 3',
      squadPlayers: [
        {
          id: 1,
          player_name: 'Fábio Lins',
          age: 25,
          nationality: 'Brazil',
          position: 'Ataque',
        },
        {
          id: 1,
          player_name: 'Fábio Lins',
          age: 25,
          nationality: 'Brazil',
          position: 'Ataque',
        },
        {
          id: 1,
          player_name: 'Fábio Lins',
          age: 25,
          nationality: 'Brazil',
          position: 'Ataque',
        },
        {
          id: 1,
          player_name: 'Fábio Lins',
          age: 25,
          nationality: 'Brazil',
          position: 'Ataque',
        },
        {
          id: 1,
          player_name: 'Fábio Lins',
          age: 25,
          nationality: 'Brazil',
          position: 'Ataque',
        },
        {
          id: 1,
          player_name: 'Fábio Lins',
          age: 25,
          nationality: 'Brazil',
          position: 'Ataque',
        },
        {
          id: 1,
          player_name: 'Fábio Lins',
          age: 25,
          nationality: 'Brazil',
          position: 'Ataque',
        },
        {
          id: 1,
          player_name: 'Fábio Lins',
          age: 25,
          nationality: 'Brazil',
          position: 'Ataque',
        },
        {
          id: 1,
          player_name: 'Fábio Lins',
          age: 25,
          nationality: 'Brazil',
          position: 'Ataque',
        },
        {
          id: 1,
          player_name: 'Fábio Lins',
          age: 25,
          nationality: 'Brazil',
          position: 'Ataque',
        },
        {
          id: 1,
          player_name: 'Fábio Lins',
          age: 25,
          nationality: 'Brazil',
          position: 'Ataque',
        },
      ],
    },
  ],
};

/*----------------------------------------------------------------------------
Functions
----------------------------------------------------------------------------*/
function verifiedNextId(teams) {
  return (
    teams.sort((a, b) => {
      if (a.id > b.id) return -1;
      if (a.id < b.id) return 1;
      return 0;
    })[0].id + 1
  );
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SAVE_TEAM_REQUEST: {
      const newState = { ...state };

      const team = action.payload;

      if (team.id) {
        const savedTeam = newState.teams.filter((t) => t.id === +team.id)[0];
        if (savedTeam) {
          savedTeam.teamName = team.teamName;
          savedTeam.description = team.description;
          savedTeam.teamWebsite = team.teamWebsite;
          savedTeam.teamType = team.teamType;
          savedTeam.tags = team.tags;
          savedTeam.formation = team.formation;
          return newState;
        }
      }

      team.id = verifiedNextId(newState.teams);
      newState.teams.push(team);
      return newState;
    }

    case types.DELETE_TEAM_REQUEST: {
      const newState = { ...state };

      const team = action.payload;
      newState.teams = newState.teams.filter((t) => t.id !== +team.id);

      return newState;
    }

    default: {
      return state;
    }
  }
}
