/* @flow */
import { TOGGLE_MODAL } from '../constants/action-types';


const toggleModal = (modalState: boolean): dispatch => {
  return dispatch => {
    dispatch(displayModal(modalState));
  };
};


const displayModal = (payload): dispatch => {
  return {
    type: TOGGLE_MODAL,
    payload
  };
};

export {
  toggleModal
};
