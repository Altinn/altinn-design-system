import React, {
  type ButtonHTMLAttributes,
  type PropsWithChildren,
} from 'react';
import cn from 'classnames';

import { SvgIcon } from '../SvgIcon';
import type { IconConditionalProps, IconKey } from '../SvgIcon/SvgIcon';

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
}

export enum ButtonVariant {
  Filled = 'filled',
  Outline = 'outline',
  Quiet = 'quiet',
}

interface ButtonCommonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size: ButtonSize;
  variant: ButtonVariant;
  color: ButtonColor;
  iconPlacement?: 'right' | 'left';
}

export type ButtonProps = ButtonCommonProps & IconConditionalProps;

const renderIcon = (iconName?: string, iconComponent?: JSX.Element) => {
  if (iconName && !iconComponent) {
    return (
      <SvgIcon
        iconName={iconName as IconKey}
        className={cn(classes[`icon`])}
      />
    );
  } else if (!iconName && iconComponent) {
    return (
      <SvgIcon
        svgIconComponent={iconComponent}
        className={cn(classes[`icon`])}
      />
    );
  }
};

export const Button = ({
  children,
  size = ButtonSize.Small,
  color = ButtonColor.Primary,
  variant = ButtonVariant.Filled,
  iconName,
  svgIconComponent,
  iconPlacement = 'left',
  type = 'button',
  ...restHTMLProps
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={cn(
        classes.button,
        classes[`button--${size}`],
        classes[`button--${variant}`],
        classes[`button--${color}`],
        classes[`button--${variant}--${color}`],
        { [classes[`button--only-icon`]]: !children && iconName },
      )}
      type={type}
      {...restHTMLProps}
    >
      {(iconPlacement === 'left' || !children) &&
        renderIcon(iconName, svgIconComponent)}
      {children}
      {iconPlacement === 'right' && renderIcon(iconName, svgIconComponent)}
    </button>
  );
};
