/* @flow */
import { TOGGLE_MODAL, LOADING } from '../constants/action-types';

type ModalAction = { type: 'TOGGLE_MODAL', displayModal: boolean };
type LoadingAction = { type: 'LOADING', isLoading: boolean };


const toggleModal = (modalState: boolean): dispatch => {
  return dispatch => {
    dispatch(displayModal(modalState));
  };
};

const toggleLoading = (loadingState: boolean) => {
  return dispatch => {
    dispatch(setLoading(loadingState));
  };
}


const displayModal = (value: boolean): ModalAction => {
  return {
    type: TOGGLE_MODAL,
    displayModal: value
  };
};

const setLoading = (value: boolean): LoadingAction => {
  return {
    type: LOADING,
    isLoading: value
  };
};

export {
  toggleModal,
  toggleLoading
};
export type {
  ModalAction,
  LoadingAction
};
