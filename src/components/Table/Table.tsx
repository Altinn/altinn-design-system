import React from 'react';
import cn from 'classnames';

import classes from './Table.module.css';
import type { ChangeHandler } from './Context';
import { TableContext } from './Context';
import type { RowData } from './TableRow';

export interface TableProps {
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
}: TableProps) => {
  return (
    <table className={cn(classes.Table)}>
      <TableContext.Provider value={{ selectRows, onChange, selectedValue }}>
        {children}
      </TableContext.Provider>
    </table>
  );
};

export default Table;
