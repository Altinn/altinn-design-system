import React from 'react';
import cn from 'classnames';

import classes from './TableCell.module.css';
import { useTableRowTypeContext, Variant } from './Context';

export interface TableCellProps {
  children?: React.ReactNode;
  variant?: string;
  colSpan?: number;
  type?: string;
  src?: string;
  alt?: string;
}

export const TableCell = ({ children, colSpan = 1 }: TableCellProps) => {
  const { variant } = useTableRowTypeContext();
  return (
    <React.Fragment>
      {variant === Variant.Header && (
        <th
          className={cn(classes['header-table-cell'])}
          colSpan={colSpan}
        >
          <div className={cn(classes['input'])}>{children}</div>
        </th>
      )}
      {variant === Variant.Body && (
        <React.Fragment>
          <td
            className={cn(classes['body-table-cell'])}
            colSpan={colSpan}
          >
            <div className={cn(classes['input'])}>{children}</div>
          </td>
        </React.Fragment>
      )}
      {variant === Variant.Footer && (
        <td colSpan={colSpan}>
          <div className={cn(classes['input'])}>{children}</div>
        </td>
      )}
    </React.Fragment>
  );
};

export default TableCell;
