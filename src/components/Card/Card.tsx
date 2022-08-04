import React from 'react';

import { CardVariant, CardContext } from './Context';
import classes from './Card.module.css';

export interface CardProps {
  children?: React.ReactNode;
  variant?: CardVariant;
}

export const Card = ({
  children,
  variant = CardVariant.Primary,
}: CardProps) => {
  return (
    <div className={classes['card']}>
      <CardContext.Provider value={{ variant }}>
        {children}
      </CardContext.Provider>
    </div>
  );
};
