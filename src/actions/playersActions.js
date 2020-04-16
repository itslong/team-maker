/* @flow */
import {
  PLAYERS_COUNT_INCREMENT,
  PLAYERS_COUNT_DECREMENT,
  UPDATE_PLAYERS_LIST,
  INITIALIZE_PLAYERS_LIST
} from '../constants/action-types';
import { generateUsers } from '../utility/generateUsers';


type CountIncrementAction = { type: typeof PLAYERS_COUNT_INCREMENT };
type CountDecrementAction = { type: typeof PLAYERS_COUNT_DECREMENT };
type UpdatePlayersListAction = { type: typeof UPDATE_PLAYERS_LIST };

type Action = 
  | CountDecrementAction
  | CountIncrementAction
  | UpdatePlayersListAction;

type Player = {
  id: number,
  username: string,
  rating?: number
};

type PlayersList = {
  id: Player
};

function updatePlayersList(id: number): Action {
  return {
    type: UPDATE_PLAYERS_LIST,
    playerId: id
  };
}

function initializePlayersList(total: number): Action {
  const createdUsers = generateUsers(total);
  const users = createdUsers.reduce((obj, currItem): PlayersList => {
    obj[currItem.id] = currItem;
    return obj;
  }, {});

  return {
    type: INITIALIZE_PLAYERS_LIST,
    playersList: users
  };
}

function playersCountIncrement(): Action {
  return {
    type: PLAYERS_COUNT_INCREMENT
  };
}

function playersCountDecrement(): Action {
  return {
    type: PLAYERS_COUNT_DECREMENT
  };
}

export {
  playersCountIncrement,
  playersCountDecrement,
  updatePlayersList,
  initializePlayersList
};
export type {
  CountIncrementAction,
  CountDecrementAction,
  UpdatePlayersListAction,
  Player,
  PlayersList
};
