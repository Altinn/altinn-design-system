import React from 'react';
import cn from 'classnames';

import classes from './Table.module.css';
import type { ChangeHandler } from './Context';
import { TableContext } from './Context';

export interface TableProps {
  children?: React.ReactNode;
  radiobutton?: boolean;
  onChange?: ChangeHandler;
  selectedValue?: string;
}

export const Table = ({
  children,
  radiobutton = false,
  onChange,
  selectedValue,
}: TableProps) => {
  return (
    <table className={cn(classes.Table)}>
      <TableContext.Provider value={{ radiobutton, onChange, selectedValue }}>
        {children}
      </TableContext.Provider>
    </table>
  );
};
