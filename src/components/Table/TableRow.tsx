import React from 'react';
import cn from 'classnames';

import type { ChangeProps } from '../ToggleButtonGroup/Context';

import classes from './TableRow.module.css';
import { useTableContext, useTableRowTypeContext, Variant } from './Context';

export interface TableRowProps {
  children?: React.ReactNode;
  value?: string;
}

export const TableRow = ({ children, value = 'no' }: TableRowProps) => {
  const { variant } = useTableRowTypeContext();
  const { onChange, selectedValue, selectRows } = useTableContext();
  const handleClick = () => {
    if (onChange != undefined) {
      onChange({ selectedValue: value });
    }
  };
  return (
    <tr
      className={cn(classes.TableRow, {
        [classes['table-row--selected']]: value === selectedValue,
        [classes['table-row--body']]:
          variant === Variant.Body && selectRows && value !== selectedValue,
      })}
      onClick={handleClick}
      aria-pressed={value == selectedValue}
    >
      <p></p>
      {children}
    </tr>
  );
};

export default TableRow;
