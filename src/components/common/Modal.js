/* @flow */
import React from 'react';
import type { MixedElement } from 'react';

import Button from './Button';
import '../../styles/ModalStyles.css';


type ModalProps = {
  id: string,
  className: string,
  headerText?: string,
  action: void,
  children?: MixedElement
};

const Modal = (props: ModalProps): MixedElement => {
  const { id, className, headerText, action, children } = props;

  const closeModal: MixedElement = 
    <Button 
      id={'close-modal'}
      className={'close-modal'}
      name={'closeTeamConfigModal'}
      title={'X'}
      action={action}
    />;


  return (
    <div className={`Modal-container-outer ${className}`}>
      <div id={id} className={'Modal-container-inner'}>
        <div className={'Modal-header'}>
          <span>{headerText}</span>

          <div className={'Modal-header-button'}>{closeModal}</div>
        </div>

        <div className={'Modal-body'}>
          {children}
        </div>

      </div>
    </div>
  );
};

export default Modal;
