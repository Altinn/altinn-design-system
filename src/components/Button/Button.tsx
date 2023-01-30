import React, {
  forwardRef,
  type ButtonHTMLAttributes,
  type PropsWithChildren,
} from 'react';
import cn from 'classnames';

import { SvgIcon } from '../SvgIcon';

import classes from './Button.module.css';

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum ButtonColor {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger',
  Inverted = 'inverted',
}

export enum ButtonVariant {
  Filled = 'filled',
  Outline = 'outline',
  Quiet = 'quiet',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  fullWidth?: boolean;
  dashedBorder?: boolean;
  icon?: React.ReactNode;
  iconPlacement?: 'right' | 'left';
}

/*
 * @deprecated Use Button from @digdir/design-system-react instead.
 */
const Button = (
  {
    children,
    color = ButtonColor.Primary,
    variant = ButtonVariant.Filled,
    size = ButtonSize.Small,
    fullWidth = false,
    dashedBorder = false,
    iconPlacement = 'left',
    icon,
    type = 'button',
    className,
    ...restHTMLProps
  }: PropsWithChildren<ButtonProps>,
  ref?: React.Ref<HTMLButtonElement> | undefined,
) => {
  return (
    <button
      {...restHTMLProps}
      ref={ref}
      className={cn(
        classes['altinn-button'],
        classes[`altinn-button--${size}`],
        classes[`altinn-button--${variant}`],
        classes[`altinn-button--${color}`],
        classes[`altinn-button--${variant}--${color}`],
        { [classes['altinn-button--full-width']]: fullWidth },
        { [classes['altinn-button--dashed-border']]: dashedBorder },
        { [classes[`altinn-button--only-icon`]]: !children && icon },
        className,
      )}
      type={type}
    >
      {icon && iconPlacement === 'left' && (
        <SvgIcon
          svgIconComponent={icon}
          className={classes.icon}
        />
      )}
      {children}
      {icon && iconPlacement === 'right' && (
        <SvgIcon
          svgIconComponent={icon}
          className={classes.icon}
        />
      )}
    </button>
  );
};

export default forwardRef(Button);
