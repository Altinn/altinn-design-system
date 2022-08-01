import React from 'react';

import classes from './List.module.css';

export interface ListProps {
  children?: React.ReactNode;
}

export const List = ({ children }: ListProps) => {
  return <ul className={classes['list']}>{children}</ul>;
};
