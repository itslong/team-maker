/* @flow */
import React from 'react';
import type { MixedElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Modal } from './common';
import { toggleModal } from '../actions';
import TeamConfigForm from './TeamConfigForm';


function TeamControls(): MixedElement {
  const isModalDisplayed = useSelector(state => state.isModalDisplayed);
  const dispatch = useDispatch();

  const handleModal = (): void => {
    dispatch(toggleModal(!isModalDisplayed));
  };

  const modalElem: MixedElement | null = isModalDisplayed ? <Modal
      id="team-config"
      className="team-config"
      headerText="Configure Your Teams"
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
