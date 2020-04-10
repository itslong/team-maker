/* @flow */
import React from 'react';
import type { MixedElement } from 'react';

import Input from './Input';


type FieldsProp = {
  id?: string,
  name?: string,
  type: string,
  value: string,
  onChange: void,
  placeholder?: string,
  style?: string,
  labelName?: string,
  fieldError?: string,
  minLength?: string
};

const FormFields = ({ fields }: {fields: Array<FieldsProp>}): MixedElement  => {

  const formFields = fields.map((field, index): MixedElement | void => {
    const { id, type, name, onChange, value, fieldError, placeholder, style, labelName, minLength } = field;

    if (type === 'input') {
      return (
        <Input
          id={id}
          key={name}
          type={type}
          name={name}
          labelName={labelName}
          placeholder={placeholder}
          style={style}
          onChange={onChange}
          value={value}
          fieldError={fieldError}
        />
      );
    }

  });

  return (
    <div className='form-fields-container'>
      {formFields}
    </div>
  );
};

export default FormFields;
