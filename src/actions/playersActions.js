/* @flow */
import { PLAYERS_COUNT_INCREMENT, PLAYERS_COUNT_DECREMENT, UPDATE_PLAYERS_LIST } from '../constants/action-types';


type CountIncrementAction = { type: typeof PLAYERS_COUNT_INCREMENT };
type CountDecrementAction = { type: typeof PLAYERS_COUNT_DECREMENT };
type UpdatePlayersListAction = { type: typeof UPDATE_PLAYERS_LIST };

type Action = 
  | CountDecrementAction
  | CountIncrementAction
  | UpdatePlayersListAction;


function updatePlayersList(): Action {
  return {
    type: UPDATE_PLAYERS_LIST
  }
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
  updatePlayersList
};
export type {
  CountIncrementAction,
  CountDecrementAction,
  UpdatePlayersListAction
};
