import React from 'react';

import { IconVariant } from './utils';
import { ReactComponent as ErrorIcon } from './error.svg';
import classes from './InputWrapper.module.css';

export interface IconProps {
  variant?: IconVariant;
}

export const Icon = ({ variant }: IconProps) => {
  if (variant === IconVariant.Error) {
    return (
      <div className={classes['InputWrapper__icon']}>
        <ErrorIcon data-testid='input-icon-error' />
      </div>
    );
  }

  return null;
};
