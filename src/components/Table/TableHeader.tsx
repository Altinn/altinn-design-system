import React from 'react';
import cn from 'classnames';

import classes from './TableHeader.module.css';
import { Variant, TableRowTypeContext, useTableContext } from './Context';

export interface TableHeaderProps {
  children?: React.ReactNode;
}

export const TableHeader = ({ children }: TableHeaderProps) => {
  const variant = Variant.Header;
  const { radiobutton } = useTableContext();
  return (
    <TableRowTypeContext.Provider value={{ variant }}>
      <thead className={cn(classes['table-header'])}>
        {radiobutton && <tr></tr>}
        {children}
      </thead>
    </TableRowTypeContext.Provider>
  );
};
