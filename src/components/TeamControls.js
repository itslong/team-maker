/* @flow */
import React from 'react';
import type { MixedElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Modal } from './common';
import { toggleModal } from '../actions';
import TeamConfigForm from './TeamConfigForm';


function TeamControls(): MixedElement {
  const modalState = useSelector(state => state.displayModal);
  const dispatch = useDispatch();

  const handleModal = (): void => {
    dispatch(toggleModal(!modalState));
  };

  const modalElem: MixedElement | null = modalState ? <Modal
      id={'team-config'}
      className={'team-config'}
      headerText={'Configure Your Teams'}
      action={handleModal}
    >
      <TeamConfigForm />
    </Modal> : null;

  return (
    <>
      {modalElem}
    </>
  );
}

export default TeamControls;
