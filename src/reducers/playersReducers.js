/* @flow */
import {
  PLAYERS_COUNT_INCREMENT,
  PLAYERS_COUNT_DECREMENT,
  UPDATE_PLAYERS_LIST,
  UPDATE_TEAM_SETTINGS,
  INITIALIZE_PLAYERS_LIST
} from '../constants/action-types';
import { CountIncrementAction, CountDecrementAction, UpdatePlayersListAction } from '../actions';


type Player = {
  id: number,
  username: string,
  rating?: number
};

type State = {
  playersCount: number,
  playersList: {
    id: Player
  }
};

type Action =
  | CountDecrementAction
  | CountIncrementAction
  | UpdatePlayersListAction;

let initialState: State = {
  playersCount: 0,
  playersList: {},
};

function playersReducers(state: State = initialState, action: Action): State {
  /* 
    Keep track of player state as players leave and enter the queue, or exiting the queue.
  */
  switch(action.type) {
    case PLAYERS_COUNT_INCREMENT:
      return {
        ...state,
        playersCount: state.playersCount + 1
      }

    case PLAYERS_COUNT_DECREMENT:
      return {
        ...state,
        playersCount: state.playersCount - 1
      }

    case INITIALIZE_PLAYERS_LIST:
      return {
        ...state,
        playersList: action.playersList
      }

    case UPDATE_PLAYERS_LIST:
      const playerId = parseInt(action.playerId);
      const { [playerId]: _, ...remainder } = state.playersList;

      return {
        ...state,
        playersList: remainder
      }

    case UPDATE_TEAM_SETTINGS:
      return {
        ...state,
        playersCount: parseInt(action.teamSettings.totalPlayers)
      }

    default:
      return state;
  }
}

export default playersReducers;
