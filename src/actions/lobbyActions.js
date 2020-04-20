/* @flow */
import {
  ADD_PLAYER_TO_LOBBY,
  REMOVE_PLAYER_FROM_LOBBY,
  INITIALIZE_PLAYERS_LIST
} from '../constants/action-types';
import { generateUsers } from '../utility/generateUsers';


type Player = {
  id: number,
  username: string,
  rating?: number
};

type PlayersList = {
  id: Player
};

type AddPlayerAction = { type: typeof PLAYERS_COUNT_INCREMENT, player: Player };
type RemovePlayerAction = { type: typeof PLAYERS_COUNT_DECREMENT, playerId: number };
type InitLobbyWithPlayersAction = { type: typeof INITIALIZE_PLAYERS_LIST, playersList: PlayersList };

type Action = 
  | AddPlayerAction
  | RemovePlayerAction
  | InitLobbyWithPlayersAction;


function addPlayerToLobby(player: Player): Action {
  return {
    type: ADD_PLAYER_TO_LOBBY,
    player
  };
}

function removePlayerFromLobby(id: number): Action {
  return {
    type: REMOVE_PLAYER_FROM_LOBBY,
    playerId: id
  };
}

function initializePlayersList(total: number): Action {
  const createdUsers = generateUsers(total);
  const users = createdUsers.reduce((usersById, currUser): PlayersList => {
    usersById[currUser.id] = currUser;
    return usersById;
  }, {});

  return {
    type: INITIALIZE_PLAYERS_LIST,
    playersList: users,
    playersCount: total
  };
}


export {
  addPlayerToLobby,
  removePlayerFromLobby,
  initializePlayersList
};
export type {
  Player,
  PlayersList,
  AddPlayerAction,
  RemovePlayerAction,
  InitLobbyWithPlayersAction
};
