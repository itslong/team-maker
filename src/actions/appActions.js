/* @flow */
import { TOGGLE_MODAL, LOADING, UPDATE_TEAM_SETTINGS } from '../constants/action-types';


type ModalAction = { type: typeof TOGGLE_MODAL, displayModal: boolean };
type LoadingAction = { type: typeof LOADING, isLoading: boolean };

type TeamSettings = {
  totalPlayers: number,
  totalTeams: number,
  playersPerTeam: number
};
type TeamSettingsAction = { type: UPDATE_TEAM_SETTINGS, teamSettings: TeamSettings };


function toggleModal(modalState: boolean) {
  return dispatch => {
    dispatch(displayModal(modalState));
  };
}

function toggleLoading(loadingState: boolean) {
  return dispatch => {
    dispatch(setLoading(loadingState));
  };
}

function updateTeamSettings(settings: TeamSettings) {
  const { totalTeams, totalPlayers, playersPerTeam } = settings;

  const validatedSettings = {
    totalPlayers: parseInt(totalPlayers),
    totalTeams: parseInt(totalTeams),
    playersPerTeam: parseInt(playersPerTeam)
  }

  return dispatch => {
    dispatch(setTeamSettings(validatedSettings));
  };
}


function displayModal(value: boolean): ModalAction {
  return {
    type: TOGGLE_MODAL,
    displayModal: value
  };
};

function setLoading(value: boolean): LoadingAction {
  return {
    type: LOADING,
    isLoading: value
  };
};

function setTeamSettings(obj: TeamSettings): TeamSettingsAction {
  return {
    type: UPDATE_TEAM_SETTINGS,
    teamSettings: obj
  };
};

export {
  toggleModal,
  toggleLoading,
  updateTeamSettings
};
export type {
  ModalAction,
  LoadingAction,
  TeamSettings
};
