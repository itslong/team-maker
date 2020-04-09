/* @flow */
import React, { useState } from 'react';

import { Modal } from './common';


const TeamControls = () => {
  const [displayModal, toggleModal] = useState(false)

  const handleModal = () => toggleModal(!displayModal)

  const modalElem = displayModal ? <Modal
      id={'team-config'}
      className={'team-config'}
      headerText={'Configure Your Teams'}
      action={handleModal}
    >
      <p>hello world</p>
      <p>hello again world</p>
    </Modal> : '';

  return (
    <div>
      {modalElem}
    </div>
  );
};

export default TeamControls;
