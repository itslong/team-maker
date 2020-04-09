/* @flow */
import { TOGGLE_MODAL } from '../constants/action-types';

type modalAction = { type: TOGGLE_MODAL, payload: boolean };
type Action = 
  | modalAction;


const toggleModal = (modalState: boolean): dispatch => {
  return dispatch => {
    dispatch(displayModal(modalState));
  };
};


const displayModal = (payload): Action => {
  return {
    type: TOGGLE_MODAL,
    payload
  };
};

export {
  toggleModal
};
