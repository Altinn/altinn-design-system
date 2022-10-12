import React from 'react';
import cn from 'classnames';

import { IconVariant } from './utils';
import { ReactComponent as ErrorIcon } from './error.svg';
import { ReactComponent as SearchIcon } from './searchIcon.svg';
import classes from './InputWrapper.module.css';

export interface IconProps {
  variant?: IconVariant;
  disabled?: boolean;
}

export const Icon = ({ variant, disabled = false }: IconProps) => {
  if (variant === IconVariant.Error) {
    return (
      <div className={classes['InputWrapper__icon']}>
        <ErrorIcon data-testid='input-icon-error' />
      </div>
    );
  } else if (variant === IconVariant.Search) {
    return (
      <div
        className={cn(classes['InputWrapper__icon'], {
          [classes['InputWrapper__icon--disabled']]: disabled,
        })}
      >
        <SearchIcon data-testid='input-icon-search' />
      </div>
    );
  }

  return null;
};
