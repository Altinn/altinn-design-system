import React from 'react';
import cn from 'classnames';

import classes from './TableCell.module.css';
import type { SortHandler } from './Context';
import { useTableRowTypeContext, Variant } from './Context';
import { ReactComponent as SortIcon } from './sort_arrow.svg';

export interface TableCellProps {
  children?: React.ReactNode;
  variant?: string;
  colSpan?: number;
  type?: string;
  src?: string;
  alt?: string;
  sortable?: boolean;
  onChange?: SortHandler;
  sortDirecton?: SortDirection;
  id?: number;
}
export enum SortDirection {
  Descending = 'desc',
  Ascending = 'asc',
  NotSortable = 'notSortable',
  NotActive = 'notActive',
}

export const TableCell = ({
  children,
  colSpan = 1,
  variant,
  onChange,
  sortDirecton = SortDirection.NotSortable,
  id,
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
          className={cn(classes['header-table-cell'])}
          colSpan={colSpan}
        >
          <div
            className={
              sortDirecton != SortDirection.NotSortable
                ? cn(classes['container-sortable'])
                : cn(classes['container'])
            }
            onClick={() => handleChange()}
            onKeyUp={() => handleChange()}
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
