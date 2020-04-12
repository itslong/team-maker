/* @flow */
import React from 'react';
import type { MixedElement } from 'react';
import { connect } from 'react-redux';

import { Modal } from './common';
import { toggleModal } from '../actions';
import TeamConfigForm from './TeamConfigForm';


type TeamControlsProps = {
  displayModal: boolean,
  toggleModal: Function
};

const ConnectedTeamControls = (props: TeamControlsProps): MixedElement => {
  const { displayModal, toggleModal } = props;

  const handleModal = (): void => {
    toggleModal(!displayModal);
  };

  const modalElem: MixedElement | null = displayModal ? <Modal
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
};

const mapStateToProps = (state) => {
  const { displayModal } = state;

  return {
    displayModal
  };
};

const TeamControls = connect(mapStateToProps, { toggleModal })(ConnectedTeamControls);

export default TeamControls;
