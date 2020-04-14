/* @flow */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FormFields, Button } from './common';
import { updateTeamSettings, toggleModal } from '../actions';
import type { TeamSettings } from '../actions'; 


const TeamConfigForm = (props: TeamSettings) => {
  /* 
    First time render, get values from store (if any).

    On subsequent input changes, hold state in formState.
    On submit, update store.
  */
  // from redux store.
  const teams = useSelector(state => state.teamSettings);
  
  // set form state.
  const [formState, setFormData] = useState(teams);

  // hook to update redux store without connect.
  const dispatch = useDispatch();
  const fields = [
    {type: 'number', name: 'totalPlayers', labelName: 'How many players total?', min: 1, maxlength: 2},
    {type: 'number', name: 'totalTeams', labelName: 'How many teams?', min: 1, maxlength: 2},
    {type: 'number', name: 'playersPerTeam', labelName: 'How many players per team?', min: 1, maxlength: 2}
  ];

  const handleChange = (e) => {
    // useState hook replaces state. hold a copy of the previous state.
    const formDataState = {...formState};
    formDataState[e.currentTarget.name] = parseInt(e.currentTarget.value);
    setFormData(formDataState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTeamSettings(formState));
    dispatch(toggleModal());
  };

  // add value and onChange properties to each field. value will read values from (component) formState.
  const formFieldsWithExtraProps = fields.map((field, index) => {
    let fieldExtraProps = {
      ...field,
      onChange: handleChange,
      value: formState[field.name]
    };
    return fieldExtraProps;
  });


  return (
    <div className={'form-container'}>
      <form>
        <FormFields fields={formFieldsWithExtraProps} />
        <div>
          <Button
            id={'done'}
            title={'Done'}
            action={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default TeamConfigForm;
