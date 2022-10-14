import React from 'react';
import cn from 'classnames';

import classes from './TableHeader.module.css';
import { Variant, TableRowTypeContext } from './Context';

export interface TableHeaderProps {
  children?: React.ReactNode;
}

export const TableHeader = ({ children }: TableHeaderProps) => {
  const variantStandard = Variant.Header;
  return (
    <TableRowTypeContext.Provider value={{ variantStandard }}>
      <thead className={cn(classes['table-header'])}>{children}</thead>
    </TableRowTypeContext.Provider>
  );
};
