import React from 'react';
import cn from 'classnames';

import classes from './TableHeader.module.css';
import { Variant, TableTypeContext, useTableContext } from './Context';

export interface TableHeaderProps {
  children?: React.ReactNode;
}

export const TableHeader = ({ children }: TableHeaderProps) => {
  const variant = Variant.Header;
  const { radiobutton } = useTableContext();
  return (
    <TableTypeContext.Provider value={{ variant }}>
      <thead className={cn(classes['table-header'])}>
        {radiobutton == true && <tr></tr>}
        {children}
      </thead>
    </TableTypeContext.Provider>
  );
};
