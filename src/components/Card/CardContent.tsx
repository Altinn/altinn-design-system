import React from 'react';

import classes from './CardContent.module.css';
import { useCardContext } from './Context';

export interface CardContentProps {
  children?: React.ReactNode;
}

export const CardContent = ({ children }: CardContentProps) => {
  const { cardVariant } = useCardContext();

  return (
    <div className={classes[`card-content--${cardVariant}`]}>{children}</div>
  );
};
