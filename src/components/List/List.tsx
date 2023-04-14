import React from 'react';
import cn from 'classnames';

import classes from './List.module.css';
import { ListContext, BorderStyle } from './Context';

export interface ListProps {
  children?: React.ReactNode;
  borderStyle?: BorderStyle;
}

/**
 * @deprecated Use List from @digdir/design-system-react instead.
 */
export const List = ({
  children,
  borderStyle = BorderStyle.Solid,
}: ListProps) => {
  return (
    <ul className={cn(classes['list'], classes[`list--${borderStyle}`])}>
      <ListContext.Provider value={{ borderStyle }}>
        {children}
      </ListContext.Provider>
    </ul>
  );
};
