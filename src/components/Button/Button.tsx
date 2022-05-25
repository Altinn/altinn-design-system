import React, {
  type ButtonHTMLAttributes,
  type PropsWithChildren,
} from 'react';
import cn from 'classnames';

import classes from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<unknown> {
  mode?: 'primary' | 'secondary' | 'submit';
}
export const Button = ({
  children,
  mode = 'primary',
  type = 'button',
  ...HTMLProps
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      data-testid={`${mode}-button`}
      className={cn(classes.button, classes[`button__${mode}`])}
      type={type}
      {...HTMLProps}
    >
      {children}
    </button>
  );
};
