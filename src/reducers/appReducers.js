/* @flow */
import type { ModalAction, LoadingAction, TeamSettings } from '../actions';
import { LOADING, TOGGLE_MODAL, UPDATE_TEAM_SETTINGS } from '../constants/action-types';


type State = {
  isLoading: boolean,
  isModalDisplayed: boolean,
  teamSettings: TeamSettings
};

type Action = 
  | LoadingAction
  | ModalAction
  | TeamSettings

let initialState: State = {
  isLoading: false,
  isModalDisplayed: false,
  teamSettings: {
    totalPlayers: 0,
    totalTeams: 0,
    playersPerTeam: 0
  }
};

function appReducers(state: State = initialState, action: Action) {
  switch(action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }

    case TOGGLE_MODAL:
      return {
        ...state,
        isModalDisplayed: action.isModalDisplayed
      }

    case UPDATE_TEAM_SETTINGS:
      return {
        ...state,
        teamSettings: action.teamSettings
      }

    default:
      return state;
  }
};

export default appReducers;
