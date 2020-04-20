/* @flow */
import {
  ADD_PLAYER_TO_LOBBY,
  REMOVE_PLAYER_FROM_LOBBY,
  INITIALIZE_PLAYERS_LIST
} from '../constants/action-types';
import type { Player, AddPlayerAction, RemovePlayerAction, InitLobbyWithPlayersAction } from '../actions';


type State = {
  playersCount: number,
  playersList: {
    id: Player
  }
};

type Action =
  | AddPlayerAction
  | RemovePlayerAction
  | InitLobbyWithPlayersAction;


let initialState: State = {
  playersCount: 0,
  playersList: {},
};

function lobbyReducers(state: State = initialState, action: Action): State {
  /* 
    Keep track of player state as players leave and enter the queue, or exiting the queue.
  */
  switch(action.type) {
    case INITIALIZE_PLAYERS_LIST:
      return {
        playersList: action.playersList,
        playersCount: action.playersCount
      }

    case REMOVE_PLAYER_FROM_LOBBY:
      const playerId = parseInt(action.playerId);
      const { [playerId]: _, ...remainder } = state.playersList;

      return {
        playersCount: state.playersCount - 1,
        playersList: remainder
      }

    case ADD_PLAYER_TO_LOBBY:
      const newPlayerObj = {
        [action.player.id]: action.player
      };

      return {
        playersCount: state.playersCount + 1,
        playersList: {...state.playersList, ...newPlayerObj}
      }

    default:
      return state;
  }
}

export default lobbyReducers;
export type { Player };
