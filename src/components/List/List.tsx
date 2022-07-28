import React from 'react';
import cn from 'classnames';

import classes from './List.module.css';
import type { BorderStyle } from './Context';
import { ListContext } from './Context';
export interface ListProps {
  children?: React.ReactNode;
  borderStyle: BorderStyle;
}

export const List = ({ children, borderStyle }: ListProps) => {
  return (
    <ul className={cn(classes['list'], classes[`list--${borderStyle}`])}>
      <ListContext.Provider value={{ borderStyle }}>
        {children}
      </ListContext.Provider>
    </ul>
  );
};
