import type { HTMLProps } from 'react';
import React from 'react';
import cn from 'classnames';

import classes from './TableCell.module.css';
import type { SortHandler } from './Context';
import { useTableRowTypeContext, Variant } from './Context';
import { ReactComponent as SortIcon } from './sort_arrow.svg';

export interface TableCellProps
  extends Omit<HTMLProps<HTMLTableCellElement>, 'onChange'> {
  children?: React.ReactNode;
  variant?: string;
  onChange?: SortHandler;
  sortDirecton?: SortDirection;
  id?: string;
}
export enum SortDirection {
  Descending = 'desc',
  Ascending = 'asc',
  NotSortable = 'notSortable',
  NotActive = 'notActive',
}

export const TableCell = ({
  children,
  variant,
  onChange,
  sortDirecton = SortDirection.NotSortable,
  id,
  className,
  ...tableCellProps
}: TableCellProps) => {
  const { variantStandard } = useTableRowTypeContext();

  const handleChange = () => {
    if (onChange != undefined && id != undefined && sortDirecton != undefined) {
      onChange({
        idCell: id,
        previousSortDirection: sortDirecton,
      });
    }
  };
  return (
    <>
      {(variant == undefined
        ? variantStandard === Variant.Header
        : variant === 'header') && (
        <th
          {...tableCellProps}
          className={cn(classes['header-table-cell'], className)}
        >
          <div
            className={
              sortDirecton != SortDirection.NotSortable
                ? cn(classes['container-sortable'])
                : cn(classes['container'])
            }
            onClick={() => handleChange()}
            onKeyUp={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                handleChange();
              }
            }}
            role={
              sortDirecton != SortDirection.NotSortable ? 'button' : undefined
            }
            tabIndex={sortDirecton != SortDirection.NotSortable ? 0 : undefined}
          >
            <div className={cn(classes['input'])}>{children}</div>
            {sortDirecton != SortDirection.NotSortable && (
              <SortIcon
                className={cn(classes['icon'], {
                  [classes['icon-asc']]:
                    sortDirecton === SortDirection.Ascending,
                  [classes['icon-desc']]:
                    sortDirecton === SortDirection.Descending,
                })}
              ></SortIcon>
            )}
          </div>
        </th>
      )}
      {(variant == undefined
        ? variantStandard === Variant.Body
        : variant === 'body') && (
        <>
          <td
            {...tableCellProps}
            className={cn(classes['body-table-cell'], className)}
          >
            <div className={cn(classes['input'])}>{children}</div>
          </td>
        </>
      )}
      {variantStandard === Variant.Footer && (
        <td
          {...tableCellProps}
          className={cn(className)}
        >
          <div className={cn(classes['input'])}>{children}</div>
        </td>
      )}
    </>
  );
};

export default TableCell;
