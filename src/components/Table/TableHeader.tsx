import type { HTMLProps } from 'react';
import React from 'react';
import cn from 'classnames';

import classes from './TableHeader.module.css';
import { Variant, TableRowTypeContext } from './Context';

export interface TableHeaderProps extends HTMLProps<HTMLTableSectionElement> {
  children?: React.ReactNode;
}

export const TableHeader = ({
  children,
  className,
  ...tableHeaderProps
}: TableHeaderProps) => {
  const variantStandard = Variant.Header;
  return (
    <TableRowTypeContext.Provider value={{ variantStandard }}>
      <thead
        {...tableHeaderProps}
        className={cn(classes['table-header'], className)}
      >
        {children}
      </thead>
    </TableRowTypeContext.Provider>
  );
};
