import React from 'react';
import cn from 'classnames';

import classes from './TableHeader.module.css';
import { Variant, TableRowTypeContext } from './Context';

export interface TableHeaderProps {
  children?: React.ReactNode;
}

export const TableHeader = ({ children }: TableHeaderProps) => {
  const variant = Variant.Header;
  return (
    <TableRowTypeContext.Provider value={{ variant }}>
      <thead className={cn(classes['table-header'])}>{children}</thead>
    </TableRowTypeContext.Provider>
  );
};
