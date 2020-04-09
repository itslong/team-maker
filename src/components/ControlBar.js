/* @flow */
import * as React from 'react';

import { Button } from './common';


const controlBarStyle = {
  display: 'flex',
  width: '100%',
  background: 'black',
  height: '30%',
  justifyContent: 'space-evenly',
};

const ControlBar = (): React.MixedElement => {
  const buttonClicked = (e: SyntheticEvent<HTMLButtonElement>): void => {
    // TODO: wire to update store state.
    console.log('the event: ', e.currentTarget);
  };

  const TeamConfig: React.MixedElement = 
    <Button 
      id={'team-config'}
      className={'control-bar'}
      name={'teamConfig'}
      title={'Configurations'}
      action={buttonClicked}
    />;

  const Start: React.MixedElement = 
    <Button 
      id={'start'}
      className={'control-bar'}
      name={'start'}
      title={'Start'}
      action={buttonClicked}
    />;


  const Reset: React.MixedElement = 
    <Button 
      id={'reset'}
      className={'control-bar'}
      name={'reset'}
      title={'Reset'}
      action={buttonClicked}
    />;

  return (
    <div style={controlBarStyle}>
      {Start}
      {Reset}
      {TeamConfig}
    </div>
  );
};

export default ControlBar;
