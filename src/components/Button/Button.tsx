import React from 'react';
import cn from 'classnames';

import classes from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<unknown> {
  mode: 'primary' | 'secondary' | 'submit';
}

export const Button = ({
  children,
  mode = 'primary',
  type = 'button',
  ...HTMLProps
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={cn(classes.button, classes[`button__${mode}`])}
      type={type}
      {...HTMLProps}
    >
      {children}
    </button>
  );
};
