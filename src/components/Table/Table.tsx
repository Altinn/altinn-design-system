import type { HTMLProps } from 'react';
import React from 'react';
import cn from 'classnames';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { tokens } from '@/DesignTokens';

import classes from './Table.module.css';
import type { ChangeHandler } from './Context';
import { TableContext } from './Context';
import type { RowData } from './TableRow';

export enum ScreenSize {
  Mobile = 'mobile',
  Tablet = 'tablet',
  Laptop = 'laptop',
}

export interface TableProps
  extends Omit<HTMLProps<HTMLTableElement>, 'onChange'> {
  children?: React.ReactNode;
  selectRows?: boolean;
  onChange?: ChangeHandler;
  selectedValue?: RowData;
  screenSize?: ScreenSize;
}

export const Table = ({
  children,
  selectRows = false,
  onChange,
  selectedValue,
  className,
  screenSize,
  ...tableProps
}: TableProps) => {
  return (
    <table
      {...tableProps}
      className={cn(classes.Table, className)}
    >
      <TableContext.Provider
        value={{ selectRows, onChange, selectedValue, screenSize }}
      >
        {children}
      </TableContext.Provider>
    </table>
  );
};

export default Table;
