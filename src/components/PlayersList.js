/* @flow */
import React from 'react';
import type { MixedElement } from 'react';

import type { PlayersList as PlayersObjectList, Player} from '../actions';


type PlayersListProp = {
  players: PlayersObjectList,
  handlePlayerOnClick: Function
};

function PlayersList({ players, handlePlayerOnClick }: PlayersListProp): MixedElement {
  return (
      <ul style={{ "listStyleType": "none", "display": "inline" }}>
        {Object.values(players).map(({id, username}: Player) => {
          return (
            <li
              key={`${id + username}`} 
              id={id}
              onClick={handlePlayerOnClick}>
              {username}
            </li>
          );
        })}
      </ul>
  );
}

export default PlayersList;
