import React, {
  type ButtonHTMLAttributes,
  type PropsWithChildren,
} from 'react';
import cn from 'classnames';

import classes from './Button.module.css';

export enum ButtonColor {
  Primary = 'primary',
  Secondary = 'secondary',
  Submit = 'submit',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonColor;
}

export const Button = ({
  children,
  variant = ButtonColor.Primary,
  type = 'button',
  ...restHTMLProps
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={cn(classes.button, classes[`button--${variant}`])}
      type={type}
      {...restHTMLProps}
    >
      {children}
    </button>
  );
};
