import React, { forwardRef } from 'react';
import cn from 'classnames';

import classes from './IconButton.module.css';

export interface IconButtonProps {
  children?: React.ReactNode;
  renderIcon?: ({ size }: RenderIconProps) => React.ReactNode;
  icon?: React.ReactNode;
}

interface RenderIconProps {
  //icon: React.ReactNode;
  size?: string;
}

export const IconButton = forwardRef(
  (props: IconButtonProps, ref: React.LegacyRef<HTMLButtonElement>) => {
    const { children, icon }: IconButtonProps = props;

    return (
      <button
        ref={ref}
        className={cn(classes['icon-button'])}
        type={'button'}
      >
        <>{icon}</>
        {children}
      </button>
    );
  },
);
IconButton.displayName = 'IconButton';
