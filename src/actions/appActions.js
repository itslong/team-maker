/* @flow */
import { TOGGLE_MODAL, LOADING, UPDATE_TEAM_SETTINGS } from '../constants/action-types';
import { initializePlayersList } from './lobbyActions';


type ModalAction = { type: typeof TOGGLE_MODAL, isModalDisplayed: boolean };
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
  const numPlayers = parseInt(totalPlayers);

  const validatedSettings = {
    totalPlayers: numPlayers,
    totalTeams: parseInt(totalTeams),
    playersPerTeam: parseInt(playersPerTeam)
  };

  return dispatch => {
    dispatch(setTeamSettings(validatedSettings));
    dispatch(initializePlayersList(numPlayers));
  };
}


function displayModal(value: boolean): ModalAction {
  return {
    type: TOGGLE_MODAL,
    isModalDisplayed: value
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
