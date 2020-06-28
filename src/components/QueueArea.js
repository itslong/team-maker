/* flow */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import PlayersList from './PlayersList';
import { returnPlayerToLobby, addPlayerToLobby, toggleQueueDialog } from '../actions';
import { Dialog } from './common';


function QueueArea() {
  const queueList = useSelector(state => state.queue.playersQueue);
  const queueCount = useSelector(state => state.queue.queueCount);
  const isDialogDisplayed = useSelector(state => state.queue.isQueueDialogDisplayed);
  const [dialogHeader, setDialogHeader] = useState('');
  const [dialogBody, setDialogBody] = useState('');

  const dispatch = useDispatch();

  const openQueueControlDialog = (e): void => {
    // TODO: Render a dialog with options to add player to team or remove player from queue.
    // can simplify this but:
    // if the user id is the same, close dialog
    // if the user id is not the same, open dialog with incoming data
    // for now, keep dialog body state in this component. Should move to redux at a later time.
    console.log('the id: ', e.target, ' page coords: ', e.pageX, e.pageY, ' inner text: ', e.currentTarget.innerText)
    const userId = e.currentTarget.id;
    if (!isDialogDisplayed) {
      setDialogHeader(e.currentTarget.id);
      setDialogBody(e.currentTarget.innerText);
      dispatch(toggleQueueDialog(true));
    } else if (userId === dialogHeader) {
      dispatch(toggleQueueDialog(false));
    } else {
      setDialogHeader(e.currentTarget.id);
      setDialogBody(e.currentTarget.innerText);
    }

    // move player controls to dialog?
    // return player to lobby, or add player to teams. Remove from queue, either way.
    // dispatch(returnPlayerToLobby(playerId));
    // dispatch(addPlayerToLobby(playerObj));
  };

  return (
    <div>
      <p>Queue: {queueCount}</p>
      <PlayersList 
        players={queueList}
        handlePlayerOnClick={openQueueControlDialog}
      />
      {isDialogDisplayed && <Dialog header={dialogHeader} body={dialogBody} />}
    </div>
  );
}

export default QueueArea;
