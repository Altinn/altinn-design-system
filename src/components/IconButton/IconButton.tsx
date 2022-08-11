import React, { forwardRef, cloneElement } from 'react';
import cn from 'classnames';

import classes from './IconButton.module.css';

export enum IconButtonVariant {
  SmallSecondary = 'secondary',
}

export enum IconButtonSize {
  Small = 'small',
}
export interface IconButtonProps {
  icon: JSX.Element;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
}

export const IconButton = forwardRef(
  (props: IconButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const {
      icon,
      variant = IconButtonVariant.SmallSecondary,
      size = IconButtonSize.Small,
    }: IconButtonProps = props;
    return (
      <button
        className={cn(classes['icon-button'])}
        ref={ref}
        type={'button'}
      >
        <div
          className={cn(
            classes[`icon-button__wrapper`],
            classes[`icon-button__wrapper--${size}`],
            classes[`icon-button__wrapper--${variant}`],
          )}
        >
          {cloneElement(icon, {
            className: cn(
              classes[`icon-button__symbol`],
              classes[`icon-button__symbol--${size}`],
            ),
          })}
        </div>
      </button>
    );
  },
);
IconButton.displayName = 'IconButton';
