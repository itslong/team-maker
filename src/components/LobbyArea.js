/* flow */
import React from 'react';
import type { MixedElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { playersCountDecrement, updatePlayersList } from '../actions';
import PlayersList from './PlayersList';


function LobbyArea(): MixedElement {
  const totalPlayers = useSelector(state => state.app.teamSettings.totalPlayers);
  const playersCount = useSelector(state => state.lobby.playersCount);
  const playersList = useSelector(state => state.lobby.playersList);

  const dispatch = useDispatch();

  const updatePlayer = (e): null => {
    const playerId = parseInt(e.target.id);
    // NOTE: decrementing count and updating state is semi-redundant and could be combined into one call.
    dispatch(playersCountDecrement());
    dispatch(updatePlayersList(playerId));
  };

  if(totalPlayers === 0 && playersCount === 0) {
    return <div><p>Use Configurations to set the player numbers.</p></div>
  }

  return (
    <div>
      <p>Players: {playersCount}</p>
      {playersCount > 0 && playersList ?
        <PlayersList 
          players={playersList}
          handlePlayerOnClick={updatePlayer}
        />
        : 'No players remaining.'
      }
    </div>
  );
}

export default LobbyArea;
