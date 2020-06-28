/* @flow */
import React from 'react';
import '../../styles/DialogStyles.css';


function Dialog({ header, body }) {

  return (
    <div className="Dialog-container-outer">
      <div className="Dialog-header">Header: {header}</div>
      <div className="Dialog-body">
        Body: {body}
      </div>
    </div>
  );
}

export default Dialog;
