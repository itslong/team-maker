/* @flow */
import React from 'react';
import { connect } from 'react-redux';

import { FormFields, Button } from './common';


const ConnectedTeamConfigForm = (props) => {
  /* 
    First time render, get values from state (if any).

    On subsequent input changes, hold state here.
    On submit or modal close, update store.
  */
  const fields = [
    {type: 'input', name: 'totalPlayers', labelName: 'How many players total?'},
    {type: 'input', name: 'totalTeams', labelName: 'How many teams?'},
    {type: 'input', name: 'playersPerTeam', labelName: 'How many players per team?'}
  ];


  const handleChange = (e) => {
    console.log('event fired: ', e.currentTarget)
  }

  // add value and onChange properties to each field.
  const formFieldsWithExtraProps = fields.map((field, index) => {
    let fieldExtraProps = {
      ...field,
      onChange: handleChange,
      value: '', //placeholder
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
            action={() => null}
          />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const TeamConfigForm = connect(mapStateToProps, {})(ConnectedTeamConfigForm);

export default TeamConfigForm;
