/* @flow */
import {
  UPDATE_QUEUE_LIST,
  RETURN_PLAYER_TO_LOBBY,
  MOVE_PLAYER_TO_TEAM,
  QUEUE_COUNT_INCREMENT,
  QUEUE_COUNT_DECREMENT
} from '../constants/action-types';


type QueueList = { type: typeof UPDATE_QUEUE_LIST };
type ReturnPlayerToLobby = { type: typeof RETURN_PLAYER_TO_LOBBY };
type QueueCountIncrement = { type: typeof QUEUE_COUNT_INCREMENT };
type QueueCountDecrement = { type: typeof QUEUE_COUNT_DECREMENT };
type MovePlayerToTeam = { type: typeof MOVE_PLAYER_TO_TEAM };

type Action = 
  | QueueList
  | ReturnPlayerToLobby
  | QueueCountDecrement
  | QueueCountIncrement
  | MovePlayerToTeam;


function updateQueueList(): Action {
  return {
    type: UPDATE_QUEUE_LIST
  };
}

function returnPlayerToLobby(): Action {
  /*
  Move Player to Lobby Area. 
  Use when player decides to manually exit Queue or other conditions (ex: timeout). 
  */
  return {
    type: RETURN_PLAYER_TO_LOBBY
  };
}

function movePlayerToTeam(): Action {
  /* 
  Move Player to a Team in the Team Area.
  Use when the number of players in the queue match settings.plaeyrsPerTeam or other qualifying conditions.
  */
  return {
    type: MOVE_PLAYER_TO_TEAM
  };
}

function queueCountIncrement(): Action {
  return {
    type: QUEUE_COUNT_INCREMENT
  };
}

function queueCountDecrement(): Action {
  return {
    type: QUEUE_COUNT_DECREMENT
  };
}

export {
  updateQueueList,
  returnPlayerToLobby,
  queueCountDecrement,
  queueCountIncrement
};
export type {
  QueueList,
  ReturnPlayerToLobby,
  QueueCountDecrement,
  QueueCountIncrement,
  MovePlayerToTeam
}