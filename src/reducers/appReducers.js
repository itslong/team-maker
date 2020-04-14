/* @flow */
import type { ModalAction, LoadingAction, TeamSettings } from '../actions';


type State = {
  isLoading: boolean,
  displayModal: boolean,
  teamSettings: TeamSettings
};

type Action = 
  | LoadingAction
  | ModalAction
  | TeamSettings

let initialState: State = {
  isLoading: false,
  displayModal: false,
  teamSettings: {
    totalPlayers: 0,
    totalTeams: 0,
    playersPerTeam: 0
  }
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

    case 'UPDATE_TEAM_SETTINGS':
      return {
        ...state,
        teamSettings: action.teamSettings
      }

    default:
      return state;
  }
};

export default appReducers;
