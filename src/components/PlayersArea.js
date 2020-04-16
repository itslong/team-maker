/* flow */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { playersCountDecrement, updatePlayersList } from '../actions';
import PlayersList from './PlayersList';


function PlayersArea() {
  const totalPlayers = useSelector(state => state.app.teamSettings.totalPlayers);
  const playersCount = useSelector(state => state.players.playersCount);
  const playersList = useSelector(state => state.players.playersList);

  const dispatch = useDispatch();

  const updatePlayer = (e) => {
    const playerId = parseInt(e.target.id);
    // NOTE: decrementing count and updating state is semi-redundant and could be combined into one call.
    dispatch(playersCountDecrement());
    dispatch(updatePlayersList(playerId));
  };

  return (
    <div>
      <p>Players: {playersCount}</p>
      {playersCount > 0 && playersList ?
        <PlayersList 
          players={playersList}
          handlePlayerOnClick={updatePlayer}
        />
        : totalPlayers > 0 ? 'No players remaining.'
        : 'Use Configurations to set the number of players.'
      }
    </div>
  );
}

export default PlayersArea;
