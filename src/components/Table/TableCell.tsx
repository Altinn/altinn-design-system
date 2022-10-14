import React, { useState } from 'react';
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

export const TableCell = ({
  children,
  colSpan = 1,
  variant,
}: TableCellProps) => {
  const { variantStandard } = useTableRowTypeContext();
  return (
    <>
      {(variant == undefined
        ? variantStandard === Variant.Header
        : variant === 'header') && (
        <th
          className={cn(classes['header-table-cell'])}
          colSpan={colSpan}
        >
          <div className={cn(classes['input'])}>{children}</div>
        </th>
      )}
      {(variant == undefined
        ? variantStandard === Variant.Body
        : variant === 'body') && (
        <>
          <td
            className={cn(classes['body-table-cell'])}
            colSpan={colSpan}
          >
            <div className={cn(classes['input'])}>{children}</div>
          </td>
        </>
      )}
      {variantStandard === Variant.Footer && (
        <td colSpan={colSpan}>
          <div className={cn(classes['input'])}>{children}</div>
        </td>
      )}
    </>
  );
};

export default TableCell;
