import React from 'react';
import cn from 'classnames';

import classes from './TableBody.module.css';
import { Variant, TableRowTypeContext } from './Context';

export interface TableBodyProps {
  children?: React.ReactNode;
}

export const TableBody = ({ children }: TableBodyProps) => {
  const variantStandard = Variant.Body;
  return (
    <TableRowTypeContext.Provider value={{ variantStandard }}>
      <tbody className={cn(classes.TableBody)}>{children}</tbody>
    </TableRowTypeContext.Provider>
  );
};

export default TableBody;
