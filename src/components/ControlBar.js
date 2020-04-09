/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';

import { Button } from './common';
import { toggleModal } from '../actions';


const controlBarStyle = {
  display: 'flex',
  width: '100%',
  background: 'black',
  height: '30%',
  justifyContent: 'space-evenly',
};

const ConnectedControlBar = (props): React.MixedElement => {
  const buttonClicked = (e: SyntheticEvent<HTMLButtonElement>): void => {
    // event will be used to control the type of modal opening.
    const { displayModal, toggleModal} = props;
    toggleModal(!displayModal);
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

const mapStateToProps = (state) => {
  const { displayModal } = state;

  return {
    displayModal
  };
};

const ControlBar = connect(mapStateToProps, { toggleModal })(ConnectedControlBar);

export default ControlBar;
