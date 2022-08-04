import React from 'react';
import cn from 'classnames';

import { useCardContext } from './Context';
import classes from './CardHeader.module.css';

export interface CardHeaderProps {
  children?: React.ReactNode;
}

export const CardHeader = ({ children }: CardHeaderProps) => {
  const { variant } = useCardContext();

  return (
    <div
      className={cn(classes['card-header'], classes[`card-header--${variant}`])}
    >
      {children}
    </div>
  );
};
