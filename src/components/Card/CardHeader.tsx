import React from 'react';

import { useCardContext } from './Context';
import classes from './CardHeader.module.css';

export interface CardHeaderProps {
  children?: React.ReactNode;
}

export const CardHeader = ({ children }: CardHeaderProps) => {
  const { cardVariant } = useCardContext();

  return (
    <div className={classes[`card-header--${cardVariant}`]}>{children}</div>
  );
};
