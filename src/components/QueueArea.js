/* flow */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PlayersList from './PlayersList';
import { returnPlayerToLobby, addPlayerToLobby } from '../actions';


function QueueArea() {
  const queueList = useSelector(state => state.queue.playersQueue);
  const queueCount = useSelector(state => state.queue.queueCount);

  const dispatch = useDispatch();

  const updatePlayer = (e) => {
    const playerId = parseInt(e.target.id);
    const playerUsername = e.target.textContent;
    const playerObj = {id: playerId, username: playerUsername};

    dispatch(returnPlayerToLobby(playerId));
    dispatch(addPlayerToLobby(playerObj));
  };

  return (
    <div>
      <p>Queue: {queueCount}</p>
      <PlayersList 
        players={queueList}
        handlePlayerOnClick={updatePlayer}
      />
    </div>
  );
}

export default QueueArea;
