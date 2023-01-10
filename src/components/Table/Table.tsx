import type { HTMLProps } from 'react';
import React from 'react';
import cn from 'classnames';

import classes from './Table.module.css';
import type { ChangeHandler, TableContextType } from './Toolbox';
import { TableContext } from './Toolbox';

export interface TableProps<T>
  extends Omit<HTMLProps<HTMLTableElement>, 'onChange'> {
  children?: React.ReactNode;
  selectRows?: boolean;
  onChange?: ChangeHandler<T>;
  selectedValue?: T;
}

export function Table<T>({
  children,
  selectRows = false,
  onChange,
  selectedValue,
  className,
  ...tableProps
}: TableProps<T>) {
  const ctx: TableContextType<T> = { selectRows, onChange, selectedValue };

  return (
    <table
      {...tableProps}
      className={cn(classes.Table, className)}
    >
      <TableContext.Provider value={ctx}>{children}</TableContext.Provider>
    </table>
  );
}
