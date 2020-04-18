/* @flow */
import React from 'react';

import '../styles/MainArea.css'
import QueueArea from './QueueArea';
import TeamsArea from './TeamsArea';
import LobbyArea from './LobbyArea';


function MainArea() {
  return (
    <div className="MainArea-container">
      <LobbyArea />
      <QueueArea />
      <TeamsArea />
    </div>
  );
}

export default MainArea;
