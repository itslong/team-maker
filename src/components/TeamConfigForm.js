/* @flow */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FormFields, Button } from './common';
import { updateTeamSettings, toggleModal } from '../actions';
import type { TeamSettings } from '../actions'; 


function TeamConfigForm(props: TeamSettings): React.MixedElement {
  /* 
    First time render, get values from store (if any).

    On subsequent input changes, hold state in formState.
    On submit, update store.
  */
  // from redux store.
  const teams = useSelector(state => state.app.teamSettings);
  const isModalDisplayed = useSelector(state => state.app.isModalDisplayed);

  // set form state.
  const [formState, setFormData] = useState(teams);

  // hook to update redux store without connect.
  const dispatch = useDispatch();
  const fields = [
    {type: "number", name: "totalPlayers", labelName: "How many players total?", min: 1, maxlength: 2},
    {type: "number", name: "totalTeams", labelName: "How many teams?", min: 1, maxlength: 2},
    {type: "number", name: "playersPerTeam", labelName: "How many players per team?", min: 1, maxlength: 2}
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
    dispatch(toggleModal(!isModalDisplayed));
  };


  return (
    <div className="form-container">
      <form>
        <FormFields fields={fields} handler={handleChange} formState={formState} />
        <div>
          <Button
            id="done"
            title="Done"
            action={handleSubmit}
          />
        </div>
      </form>
    </div>
  );
};

export default TeamConfigForm;
