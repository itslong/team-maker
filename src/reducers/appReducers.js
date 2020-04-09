/* @flow */
import { LOADING, TOGGLE_MODAL } from '../constants/action-types';


type State = {
  isLoading: boolean,
  displayModal: boolean
};

type Action = 
  | { type: LOADING, isLoading: boolean }
  | { type: TOGGLE_MODAL, displayModal: boolean}

let initialState: State = {
  isLoading: false,
  displayModal: false
};

const isLoading = (state: State, action: Action) => {
  return {
    ...state,
    isLoading: true,
  };
};

const handleModal = (state: State, action: Action) => {
  return {
    ...state,
    displayModal: action.payload
  };
};

const appReducers = (state: State = initialState, action: Action) => {
  switch(action.type) {
    case LOADING: {
      return isLoading(state, action);
    }

    case TOGGLE_MODAL: {
      return handleModal(state, action);
    }

    default:
      return state;
  }

};

export default appReducers;
