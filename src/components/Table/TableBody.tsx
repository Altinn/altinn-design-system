import type { HTMLProps } from 'react';
import React from 'react';
import cn from 'classnames';

import classes from './TableBody.module.css';
import { Variant, TableRowTypeContext } from './Context';

export interface TableBodyProps extends HTMLProps<HTMLTableSectionElement> {
  children?: React.ReactNode;
}

export const TableBody = ({
  children,
  className,
  ...tableBodyProps
}: TableBodyProps) => {
  const variantStandard = Variant.Body;
  return (
    <TableRowTypeContext.Provider value={{ variantStandard }}>
      <tbody
        {...tableBodyProps}
        className={cn(classes.TableBody, className)}
      >
        {children}
      </tbody>
    </TableRowTypeContext.Provider>
  );
};

export default TableBody;
