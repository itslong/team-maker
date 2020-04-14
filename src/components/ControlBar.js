/* @flow */
import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from './common';
import { toggleModal } from '../actions';


const controlBarStyle = {
  display: 'flex',
  width: '100%',
  background: 'black',
  height: '30%',
  justifyContent: 'space-evenly',
};

const ControlBar = (): React.MixedElement => {
  const modalState = useSelector(state => state.displayModal);
  const dispatch = useDispatch();

  const buttonClicked = (e: SyntheticEvent<HTMLButtonElement>): void => {
    const modalType: string = e.currentTarget.name;

    if (modalType === 'teamConfig') {
      dispatch(toggleModal(!modalState));
    }
    // TODO: instantiate other types of modals based on button.name.
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
