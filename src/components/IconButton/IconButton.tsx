import React, { forwardRef, cloneElement } from 'react';
import cn from 'classnames';

import classes from './IconButton.module.css';

export interface IconButtonProps {
  children?: React.ReactNode;
  renderIcon?: ({ size }: RenderIconProps) => React.ReactNode;
  icon: JSX.Element;
}

interface RenderIconProps {
  //icon: React.ReactNode;
  size?: string;
}

export const IconButton = forwardRef(
  (props: IconButtonProps, ref: React.Ref<HTMLButtonElement>) => {
    const { icon }: IconButtonProps = props;

    return (
      <button
        ref={ref}
        className={cn(classes['icon-button'])}
        type={'button'}
      >
        {cloneElement(icon, {
          width: '16px',
          height: '16px',
        })}
      </button>
    );
  },
);
IconButton.displayName = 'IconButton';
