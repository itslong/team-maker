/* @flow */
import {
  ADD_PLAYER_TO_QUEUE,
  REMOVE_PLAYER_FROM_QUEUE,
  MOVE_PLAYER_TO_TEAM,
} from '../constants/action-types';
import type { Player } from './lobbyActions';


type QueueList = { type: typeof UPDATE_QUEUE_LIST };
type ReturnPlayerToLobby = { type: typeof RETURN_PLAYER_TO_LOBBY };
type MovePlayerToTeam = { type: typeof MOVE_PLAYER_TO_TEAM };

type Action = 
  | QueueList
  | ReturnPlayerToLobby
  | MovePlayerToTeam;


function addPlayerToQueue(player: Player): Action {
  return {
    type: ADD_PLAYER_TO_QUEUE,
    player
  };
}

function returnPlayerToLobby(id: number): Action {
  /*
  Move Player to Lobby Area. 
  Use when player decides to manually exit Queue or other conditions (ex: timeout). 
  */
  return {
    type: REMOVE_PLAYER_FROM_QUEUE,
    playerId: id
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


export {
  addPlayerToQueue,
  returnPlayerToLobby,
};
export type {
  QueueList,
  ReturnPlayerToLobby,
  MovePlayerToTeam
}