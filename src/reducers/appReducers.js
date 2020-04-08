/* @flow */
import { LOADING } from '../constants/action-types';


type State = {
  isLoading: boolean
}

type Action = | { type: LOADING, isLoading: boolean }

let initialState: State = {
  isLoading: false,
};

const isLoading = (state: State, action: Action) => {
  return {
    ...state,
    isLoading: true,
  };
};

const appReducers = (state: State = initialState, action: Action) => {
  switch(action.type) {
    case LOADING: {
      return isLoading(state, action);
    }
    default:
      return state;
  }

};

export default appReducers;
