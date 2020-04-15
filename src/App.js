/* @flow */
import React from 'react';
import './App.css';

import ControlBar from './components/ControlBar';
import TeamControls from './components/TeamControls';
import MainArea from './components/MainArea';


function App() {
  return (
    <div className="App">
      <ControlBar />
      <MainArea />
      <TeamControls />
    </div>
  );
}

export default App;
