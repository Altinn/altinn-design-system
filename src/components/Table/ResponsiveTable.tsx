import React from 'react';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { tokens } from '@/DesignTokens';

import { RadioButton } from '../RadioButton';

import type { SortProps } from './Toolbox';
import { SortDirection } from './Toolbox';
import { Table } from './Table';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';
import { TableBody } from './TableBody';
import { TableFooter } from './TableFooter';
import classes from './TableCell.module.css';

export interface ResponsiveTableConfig<T> {
  rows: T[];
  headers: { [Col in keyof T]: string | JSX.Element };
  showColumnsMobile?: (keyof T)[];
  /**
   * Custom per-cell rendering. All cells will render their content directly by default (assumed to be string, number
   * or some simple scalar type). If need to override how each cell is rendered, you can supply a render function here.
   */
  renderCell?: { [K in keyof T]?: (cell: T[K]) => JSX.Element };
  /**
   * Column sort functionality. If you set this property, you need to specify which columns/headers are sortable,
   * the current state for which column is sorted (along with the direction) and a callback to handle sort changes.
   */
  columnSort?: {
    onSortChange: (props: SortProps & { column: keyof T }) => void;
    sortable: (keyof T)[];
    currentlySortedColumn: keyof T | undefined;
    currentDirection: SortDirection | undefined;
  };
  /**
   * Row selection functionality. If you set this property, you'll enable selecting individual rows. You have to
   * handle the selection state yourself, and re-render this component with a new selectedValue whenever it changes.
   */
  rowSelection?: {
    onSelectionChange: (row: T) => void;
    selectedValue: T | undefined;
  };
  /**
   * Renders some content into a footer row spanning all columns. Usually used for rendering
   * a Pagination component.
   */
  footer?: JSX.Element;
}

export interface ResponsiveTableProps<T> {
  config: ResponsiveTableConfig<T>;
}

export function ResponsiveTable<T>({ config }: ResponsiveTableProps<T>) {
  const isMobile = useMediaQuery(`(max-width: ${tokens.BreakpointsSm})`);

  return isMobile ? (
    <MobileTable config={config} />
  ) : (
    <LaptopTable config={config} />
  );
}

function MobileTable<T>({ config }: ResponsiveTableProps<T>) {
  const { rows, headers, showColumnsMobile, renderCell, rowSelection, footer } =
    config;

  const selectedRowJson = JSON.stringify(rowSelection?.selectedValue || null);
  const columns = Object.keys(headers) as (keyof T)[];
  const numColumns = rowSelection ? 2 : 1;

  return (
    <Table
      selectRows={!!rowSelection}
      onChange={({ selectedValue }) =>
        rowSelection?.onSelectionChange(selectedValue)
      }
      selectedValue={rowSelection?.selectedValue}
    >
      <TableBody>
        {rows.map((row) => {
          const value = JSON.stringify(row);
          return (
            <TableRow
              key={value}
              rowData={row}
            >
              {rowSelection && (
                <TableCell radiobutton={true}>
                  <RadioButton
                    name={value}
                    onChange={() => rowSelection.onSelectionChange(row)}
                    value={value}
                    checked={value === selectedRowJson}
                    label={value}
                    hideLabel={true}
                  ></RadioButton>
                </TableCell>
              )}
              <TableCell
                key={`${value}-data`}
                style={{ padding: '0px' }}
              >
                {columns.map((column) => {
                  if (
                    showColumnsMobile &&
                    !showColumnsMobile.includes(column)
                  ) {
                    return;
                  }

                  const renderFunc = renderCell && renderCell[column];
                  const content = renderFunc
                    ? renderFunc(row[column])
                    : (row[column] as string);

                  return (
                    <>
                      <div className={classes['header']}>{headers[column]}</div>
                      <div className={classes['property']}>{content}</div>
                    </>
                  );
                })}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
      {footer && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={numColumns}>{footer}</TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  );
}

function LaptopTable<T>({ config }: ResponsiveTableProps<T>) {
  const { rows, headers, renderCell, columnSort, rowSelection, footer } =
    config;

  const selectedRowJson = JSON.stringify(rowSelection?.selectedValue || null);
  const columns = Object.keys(headers) as (keyof T)[];
  const numColumns = rowSelection
    ? Object.keys(headers).length + 1
    : Object.keys(headers).length;

  return (
    <Table
      selectRows={!!rowSelection}
      onChange={({ selectedValue }) =>
        rowSelection?.onSelectionChange(selectedValue)
      }
      selectedValue={rowSelection?.selectedValue}
    >
      <TableHeader>
        <TableRow>
          {rowSelection && <TableCell radiobutton={true}></TableCell>}
          {columns.map((column) => (
            <TableCell
              key={column as string}
              onChange={({ next, previous }) => {
                columnSort &&
                  columnSort.onSortChange({ column, next, previous });
              }}
              sortDirection={
                columnSort
                  ? columnSort.currentlySortedColumn === column
                    ? columnSort.currentDirection
                    : columnSort.sortable.includes(column)
                    ? SortDirection.NotActive
                    : SortDirection.NotSortable
                  : SortDirection.NotSortable
              }
            >
              {headers[column]}
            </TableCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((row) => {
          const value = JSON.stringify(row);
          return (
            <TableRow
              key={value}
              rowData={row}
            >
              {rowSelection && (
                <TableCell radiobutton={true}>
                  <RadioButton
                    name={value}
                    onChange={() => rowSelection.onSelectionChange(row)}
                    value={value}
                    checked={value === selectedRowJson}
                    label={value}
                    hideLabel={true}
                  ></RadioButton>
                </TableCell>
              )}
              {columns.map((column) => {
                const renderFunc = renderCell && renderCell[column];
                return (
                  <TableCell key={`${value}-${column as string}`}>
                    {renderFunc
                      ? renderFunc(row[column])
                      : (row[column] as string)}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
      {footer && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={numColumns}>{footer}</TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  );
}
