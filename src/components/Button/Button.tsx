import React, {
  type ButtonHTMLAttributes,
  type PropsWithChildren,
} from 'react';
import cn from 'classnames';

import classes from './Button.module.css';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Submit = 'submit',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export const Button = ({
  children,
  variant = ButtonVariant.Primary,
  type = 'button',
  ...restHTMLProps
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      data-testid={`${variant}-button`}
      className={cn(classes.button, classes[`button--${variant}`])}
      type={type}
      {...restHTMLProps}
    >
      {children}
    </button>
  );
};
