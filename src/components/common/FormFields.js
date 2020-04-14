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
  min?: string,
  max?: string,
  maxlength?: string
};

type FormFieldsProp = {
  fields: Array<FieldsProp>,
  handler: Function,
  formState: Object
};

const FormFields = ({ fields, handler, formState }: FormFieldsProp): MixedElement  => {
  const formFields = fields.map((field, index): MixedElement | null => {
    const { id, type, name, fieldError, placeholder, style, labelName } = field;

    if (type === 'text') {
      return (
        <Input
          id={id}
          key={name}
          type={type}
          name={name}
          labelName={labelName}
          placeholder={placeholder}
          style={style}
          onChange={handler}
          value={formState[field.name]}
          fieldError={fieldError}
        />
      );
    }

    if (type === 'number') {
      const { min, max, maxlength } = field;

      return (
        <Input
          id={id}
          key={name}
          type={type}
          name={name}
          labelName={labelName}
          placeholder={placeholder}
          style={style}
          onChange={handler}
          value={formState[field.name]}
          fieldError={fieldError}
          min={min}
          max={max}
          maxlength={maxlength}
        />
      )
    }

    return null;
  });

  return (
    <div className='form-fields-container'>
      {formFields}
    </div>
  );
};

export default FormFields;
