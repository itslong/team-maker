/* @flow */
import type { ModalAction, LoadingAction } from '../actions';


type State = {
  isLoading: boolean,
  displayModal: boolean
};

type Action = 
  | LoadingAction
  | ModalAction

let initialState: State = {
  isLoading: false,
  displayModal: false
};

const appReducers = (state: State = initialState, action: Action) => {
  switch(action.type) {
    case 'LOADING':
      return {
        ...state,
        isLoading: action.isLoading
      }

    case 'TOGGLE_MODAL':
      return {
        ...state,
        displayModal: action.displayModal
      }

    default:
      return state;
  }
};

export default appReducers;
