/* @flow */
import { MOVE_PLAYER_TO_TEAM } from '../constants/action-types';
import type { Player } from '../actions';


type State = {
  teams: {
    teamId: {
      playerId: Player
    }
  },
  teamsCount: number,
  teamsFilled: number,
};

/**
  Shape of state should be:
  teams: {
    teamId: {
      playerId: {
  
      },
      '123': {
  
      },
      ...
    },
    '23456': {
  
    },
    ...
  }
*/
let initialState = {
  teams: {},
  teamsCount: 0,
  teamsFilled: 0,
};

function teamsReducers(state: State = initialState, action): State {
  switch(action.type) {
    case MOVE_PLAYER_TO_TEAM:
      return {
        ...state
      }

    default:
      return state;
  }
}

export default teamsReducers;
