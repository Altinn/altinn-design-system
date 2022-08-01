import React from 'react';

import { CardVariant, CardContext } from './Context';
import classes from './Card.module.css';

export interface CardProps {
  children?: React.ReactNode;
  cardVariant: CardVariant;
}

export const Card = ({
  children,
  cardVariant = CardVariant.ProfilePrimaryCard,
}: CardProps) => {
  return (
    <div className={classes['card']}>
      <CardContext.Provider value={{ cardVariant }}>
        {children}
      </CardContext.Provider>
    </div>
  );
};
