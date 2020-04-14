/* @flow */
import React from 'react';
import type { MixedElement } from 'react';


type ButtonProps = {
  id: string,
  className?: string,
  name: string,
  title: string,
  style?: string,
  action: void
};

function Button(props: ButtonProps): MixedElement {
  const { id, className, name, title, style, action } = props;

  return (
    <button
      id={id}
      className={className}
      name={name}
      style={style}
      onClick={action}
    >
      {title}
    </button>
  )
};

export default Button;
