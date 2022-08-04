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
      data-testid={`list-item-${borderStyle}`}
      className={cn(classes['list-item'], classes[`list-item--${borderStyle}`])}
    >
      {children}
    </li>
  );
};
