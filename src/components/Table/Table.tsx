import type { HTMLProps } from 'react';
import React from 'react';
import cn from 'classnames';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import { tokens } from '@/DesignTokens';

import classes from './Table.module.css';
import type { ChangeHandler } from './Context';
import { TableContext, ScreenSize } from './Context';
import type { RowData } from './TableRow';

export interface TableProps
  extends Omit<HTMLProps<HTMLTableElement>, 'onChange'> {
  children?: React.ReactNode;
  selectRows?: boolean;
  onChange?: ChangeHandler;
  selectedValue?: RowData;
}

export const Table = ({
  children,
  selectRows = false,
  onChange,
  selectedValue,
  className,
  ...tableProps
}: TableProps) => {
  const isMobile = useMediaQuery(`(max-width: ${tokens.BreakpointsSm})`);
  const screenSize = isMobile ? ScreenSize.Mobile : ScreenSize.Laptop;

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
