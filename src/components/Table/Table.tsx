import type { HTMLProps } from 'react';
import React from 'react';
import cn from 'classnames';

import classes from './Table.module.css';
import type { ChangeHandler } from './Toolbox';
import { TableContext } from './Toolbox';
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
  return (
    <table
      {...tableProps}
      className={cn(classes.Table, className)}
    >
      <TableContext.Provider value={{ selectRows, onChange, selectedValue }}>
        {children}
      </TableContext.Provider>
    </table>
  );
};
