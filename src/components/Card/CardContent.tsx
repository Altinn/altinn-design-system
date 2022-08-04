import React from 'react';
import cn from 'classnames';

import classes from './CardContent.module.css';
import { useCardContext } from './Context';

export interface CardContentProps {
  children?: React.ReactNode;
}

export const CardContent = ({ children }: CardContentProps) => {
  const { variant } = useCardContext();

  return (
    <div
      className={cn(
        classes[`card-content`],
        classes[`card-content--${variant}`],
      )}
    >
      {children}
    </div>
  );
};
