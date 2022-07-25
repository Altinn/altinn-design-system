import React from 'react';

import classes from './ListItem.module.css';

export interface ListItemProps {
  children?: React.ReactNode;
}

export const ListItem = ({ children }: ListItemProps) => {
  return <li className={classes['list-item']}>{children}</li>;
};
