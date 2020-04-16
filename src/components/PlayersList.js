/* @flow */
import React from 'react';
import type { MixedElement } from 'react';

import type { PlayersList as PlayersObjectList, Player} from '../actions';


type PlayersListProp = {
  players: PlayersObjectList,
  handlePlayerOnClick: Function
};

type PlayerItem = [string, Player];

function PlayersList({ players, handlePlayerOnClick }: PlayersListProp): MixedElement {
  return (
      <ul onClick={handlePlayerOnClick} style={{ "listStyleType": "none", "display": "inline" }}>
        {Object.entries(players).map((item: PlayerItem) => {
          const itemId = item[1].id;
          const username = item[1].username;
          return (
            <li key={(itemId + username).toString()} id={itemId}>{username}</li>
          );
        })}
      </ul>
  );
}

export default PlayersList;
