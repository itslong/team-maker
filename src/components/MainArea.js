/* @flow */
import React from 'react';

import '../styles/MainArea.css'
import QueueArea from './QueueArea';
import TeamsArea from './TeamsArea';
import PlayersArea from './PlayersArea';


function MainArea() {
  return (
    <div className="MainArea-container">
      <PlayersArea />
      <QueueArea />
      <TeamsArea />
    </div>
  );
}

export default MainArea;