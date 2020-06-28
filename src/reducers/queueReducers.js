/* @flow */
import type { Player } from './lobbyReducers';
import {
  ADD_PLAYER_TO_QUEUE,
  REMOVE_PLAYER_FROM_QUEUE,
  MOVE_PLAYER_TO_TEAM,
  TOGGLE_QUEUE_DIALOG,
} from '../constants/action-types';
import type {
  QueueList,
  ReturnPlayerToLobby,
  MovePlayerToTeam
} from '../actions';


type State = {
  playersQueue: Array<Player>,
  queueCount: number,
  isQueueDialogDisplayed: boolean,
  queueDialogId: number | null,
};

type Action = 
  | QueueList
  | ReturnPlayerToLobby
  | MovePlayerToTeam;

// for now, dialog state is kept in Queue area. Should move to redux soon.
let initialState = {
  playersQueue: [],
  queueCount: 0,
  isQueueDialogDisplayed: false,
  queueDialogId: null
};

function queueReducers(state: State = initialState, action: Action): State {
  switch(action.type) {
    case ADD_PLAYER_TO_QUEUE:
      return {
        ...state,
        queueCount: state.queueCount + 1,
        playersQueue: [...state.playersQueue, action.player]
      }

    case REMOVE_PLAYER_FROM_QUEUE:
      const newState = state.playersQueue.filter((usersById) => usersById.id !== action.playerId);

      return {
        ...state,
        queueCount: state.queueCount - 1,
        playersQueue: newState
      }

    case MOVE_PLAYER_TO_TEAM:
      return {
        ...state
      }

    case TOGGLE_QUEUE_DIALOG:
      return {
        ...state,
        isQueueDialogDisplayed: action.isQueueDialogDisplayed,
      }

    default:
      return state;
  }
}

export default queueReducers;

