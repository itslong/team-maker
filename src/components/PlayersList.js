/* @flow */
import React from 'react';


function PlayersList({ players, handlePlayerOnClick }) {
  return (
      <ul onClick={handlePlayerOnClick} style={{ "listStyleType": "none", "display": "inline" }}>
        {Object.entries(players).map(item => {
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
