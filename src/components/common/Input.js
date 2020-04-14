/* @flow */
import React from 'react';
import type { MixedElement } from 'react';


type InputProps = {
  id?: string,
  name?: string,
  type: string,
  value: string,
  onChange: void,
  placeholder?: string,
  style?: string,
  labelName?: string,
  fieldError?: string
};

function Input(props: InputProps): MixedElement {
  const { id, name, type, value, onChange, placeholder, style, labelName, fieldError } = props;

  const displayFieldError: MixedElement | null = fieldError ?
    <div className={'error'} style={{display: 'inline'}}>{fieldError}</div>
    : null;

  return (
    <div>
      <label htmlFor={name}>{labelName}</label>
      <input
        id={id}
        className={name || 'form-input'}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={style}
      />
      {displayFieldError}
    </div>
  );
};



export default Input;
