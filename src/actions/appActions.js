/* @flow */
import { TOGGLE_MODAL, LOADING, UPDATE_TEAM_SETTINGS } from '../constants/action-types';

type ModalAction = { type: 'TOGGLE_MODAL', displayModal: boolean };
type LoadingAction = { type: 'LOADING', isLoading: boolean };

type TeamSettings = {
  totalPlayers: number,
  totalTeams: number,
  playersPerTeam: number
};
type TeamSettingsAction = { type: 'UPDATE_TEAM_SETTINGS', teamSettings: TeamSettings };


const toggleModal = (modalState: boolean) => {
  return dispatch => {
    dispatch(displayModal(modalState));
  };
};

const toggleLoading = (loadingState: boolean) => {
  return dispatch => {
    dispatch(setLoading(loadingState));
  };
}

const updateTeamSettings = (settings: TeamSettings) => {
  const { totalTeams, totalPlayers, playersPerTeam } = settings;

  const validatedSettings = {
    totalPlayers: parseInt(totalPlayers),
    totalTeams: parseInt(totalTeams),
    playersPerTeam: parseInt(playersPerTeam)
  }

  return dispatch => {
    dispatch(setTeamSettings(validatedSettings));
  };
};


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

const setTeamSettings = (obj: TeamSettings): TeamSettingsAction => {
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
