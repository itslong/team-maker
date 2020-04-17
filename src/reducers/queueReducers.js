/* @flow */
import type { Player } from './playersReducers';
import {
  UPDATE_QUEUE_LIST,
  RETURN_PLAYER_TO_LOBBY,
  MOVE_PLAYER_TO_TEAM,
  QUEUE_COUNT_INCREMENT,
  QUEUE_COUNT_DECREMENT
} from '../constants/action-types';
import type {
  QueueList,
  ReturnPlayerToLobby,
  QueueCountDecrement,
  QueueCountIncrement,
  MovePlayerToTeam
} from '../actions';


type State = {
  playersQueue: Array<Player>,
  queueCount: number
};

type Action = 
  | QueueList
  | ReturnPlayerToLobby
  | QueueCountDecrement
  | QueueCountIncrement
  | MovePlayerToTeam;


let initialState = {
  playersQueue: [],
  queueCount: 0
};

function queueReducers(state: State = initialState, action: Action): State {
  switch(action.type) {
    case UPDATE_QUEUE_LIST:
      return {
        ...state
      }

    case RETURN_PLAYER_TO_LOBBY:
      return {
        ...state
      }

    case MOVE_PLAYER_TO_TEAM:
      return {
        ...state
      }

    case QUEUE_COUNT_DECREMENT:
      return {
        ...state,
        queueCount: state.queueCount - 1
      }

    case QUEUE_COUNT_INCREMENT:
      return {
        ...state,
        queueCount: state.queueCount + 1
      }

    default:
      return state;
  }
}

export default queueReducers;

