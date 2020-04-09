/* @flow */
import React, { useState } from 'react';
import type { MixedElement } from 'react';

import { Modal } from './common';


const TeamControls = (): MixedElement => {
  // TODO: may move modal state to redux
  const [displayModal, toggleModal] = useState(true);

  const handleModal = (): void => toggleModal(!displayModal);

  const modalElem: MixedElement | null = displayModal ? <Modal
      id={'team-config'}
      className={'team-config'}
      headerText={'Configure Your Teams'}
      action={handleModal}
    >
      <p>hello world</p>
      <p>hello again world</p>
    </Modal> : null;

  return (
    <>
      {modalElem}
    </>
  );
};

export default TeamControls;
