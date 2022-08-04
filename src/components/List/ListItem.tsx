import React from 'react';
import cn from 'classnames';

import classes from './ListItem.module.css';
import { useListContext } from './Context';
export interface ListItemProps {
  children?: React.ReactNode;
}

export const ListItem = ({ children }: ListItemProps) => {
  const { borderStyle } = useListContext();
  return (
    <li
      className={cn(classes['list-item'], classes[`list-item--${borderStyle}`])}
    >
      {children}
    </li>
  );
};
