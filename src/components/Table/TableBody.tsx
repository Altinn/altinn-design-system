import React from 'react';
import cn from 'classnames';

import classes from './TableBody.module.css';
import { Variant, TableTypeContext } from './Context';

export interface TableBodyProps {
  children?: React.ReactNode;
}

export const TableBody = ({ children }: TableBodyProps) => {
  const variant = Variant.Body;
  return (
    <TableTypeContext.Provider value={{ variant }}>
      <tbody className={cn(classes.TableBody)}>{children}</tbody>
    </TableTypeContext.Provider>
  );
};
