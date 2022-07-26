import React from 'react';
import cn from 'classnames';

import classes from './CardHeader.module.css';

export enum Heights {
  Small,
  Medium,
  Big,
}

export interface CardHeaderProps {
  children?: string;
  height?: Heights;
}

export const Card = ({ children }: CardHeaderProps) => {
  return <div>{children}</div>;
};
