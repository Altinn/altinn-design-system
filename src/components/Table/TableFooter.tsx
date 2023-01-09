import type { HTMLProps } from 'react';
import React from 'react';
import cn from 'classnames';

import classes from './TableFooter.module.css';
import { Variant, TableRowTypeContext } from './Context';

export interface TableFooterProps extends HTMLProps<HTMLTableSectionElement> {
  children?: React.ReactNode;
}

export const TableFooter = ({
  children,
  className,
  ...tableFooterProps
}: TableFooterProps) => {
  const variantStandard = Variant.Footer;
  return (
    <TableRowTypeContext.Provider value={{ variantStandard }}>
      <tfoot
        {...tableFooterProps}
        className={cn(classes['table-footer'], className)}
      >
        {children}
      </tfoot>
    </TableRowTypeContext.Provider>
  );
};
