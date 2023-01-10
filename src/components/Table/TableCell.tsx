import type { HTMLProps } from 'react';
import React from 'react';
import cn from 'classnames';

import classes from './TableCell.module.css';
import type { SortHandler } from './Toolbox';
import { useTableRowTypeContext, Variant, SortDirection } from './Toolbox';
import { ReactComponent as SortIcon } from './sort_arrow.svg';

export interface TableCellProps
  extends Omit<HTMLProps<HTMLTableCellElement>, 'onChange'> {
  children?: React.ReactNode;
  variant?: string;
  onChange?: SortHandler;
  sortDirection?: SortDirection;
  radiobutton?: boolean;
}

export function TableCell({
  children,
  variant,
  onChange,
  sortDirection = SortDirection.NotSortable,
  className,
  radiobutton = false,
  ...tableCellProps
}: TableCellProps) {
  const { variantStandard } = useTableRowTypeContext();

  const isVariant = (checkIf: Variant): boolean => {
    if (variant === undefined) {
      return variantStandard === checkIf;
    }

    return variant === checkIf;
  };

  const handleChange = () => {
    if (onChange != undefined && sortDirection != undefined) {
      onChange({
        next:
          sortDirection === SortDirection.Descending
            ? SortDirection.Ascending
            : SortDirection.Descending,
        previous: sortDirection,
      });
    }
  };

  return (
    <>
      {isVariant(Variant.Header) && (
        <th
          {...tableCellProps}
          className={
            radiobutton
              ? cn(classes['header-table-cell-radiobutton'], className)
              : cn(classes['header-table-cell'], className)
          }
          aria-sort={
            sortDirection === SortDirection.Ascending
              ? 'ascending'
              : sortDirection === SortDirection.Descending
              ? 'descending'
              : 'none'
          }
        >
          <div
            className={
              sortDirection != SortDirection.NotSortable
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
              sortDirection != SortDirection.NotSortable ? 'button' : undefined
            }
            tabIndex={
              sortDirection != SortDirection.NotSortable ? 0 : undefined
            }
          >
            <div className={cn(classes['input'])}>{children}</div>
            {sortDirection != SortDirection.NotSortable && (
              <SortIcon
                aria-label='Sortering'
                data-testid='sort-icon'
                className={cn(classes['icon'], {
                  [classes['icon-asc']]:
                    sortDirection === SortDirection.Ascending,
                  [classes['icon-desc']]:
                    sortDirection === SortDirection.Descending,
                })}
              ></SortIcon>
            )}
          </div>
        </th>
      )}
      {isVariant(Variant.Body) && (
        <td
          {...tableCellProps}
          className={
            radiobutton
              ? cn(classes['body-table-cell-radiobutton'], className)
              : cn(classes['body-table-cell'], className)
          }
          style={{ padding: '0px' }}
        >
          <div
            className={
              radiobutton ? cn(classes['radio-button']) : cn(classes['input'])
            }
          >
            {' '}
            {children}
          </div>
        </td>
      )}
      {isVariant(Variant.Footer) && (
        <td
          {...tableCellProps}
          className={cn(className)}
        >
          <div className={cn(classes['input'])}>{children}</div>
        </td>
      )}
    </>
  );
}
