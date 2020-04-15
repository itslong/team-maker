/* @flow */
import { PLAYERS_COUNT_INCREMENT, PLAYERS_COUNT_DECREMENT, UPDATE_PLAYERS_LIST } from '../constants/action-types';
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

    case UPDATE_PLAYERS_LIST:
      // TODO: remove player object by its ID.
      return {
        ...state
      }

    default:
      return state;
  }
}

export default playersReducers;