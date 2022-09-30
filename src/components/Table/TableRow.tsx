import React from 'react';
import cn from 'classnames';

import type { ChangeProps } from '../ToggleButtonGroup/Context';

import classes from './TableRow.module.css';
import { useTableContext, useTableRowTypeContext, Variant } from './Context';
import { TableCell } from './TableCell';
import { TableRadioButton } from './TableRadioButton';

export interface TableRowProps {
  children?: React.ReactNode;
  value?: string;
}

export const TableRow = ({ children, value = 'no' }: TableRowProps) => {
  const { variant } = useTableRowTypeContext();
  const { onChange, selectedValue, radiobutton } = useTableContext();
  const handleChange = ({ selectedValue: val }: ChangeProps) => {
    if (onChange != undefined) {
      onChange({ selectedValue: val });
    }
  };
  return (
    <tr
      className={cn(classes.TableRow, {
        [classes['table-row--selected']]: value === selectedValue,
        [classes['table-row--body']]: variant === Variant.Body,
      })}
    >
      {radiobutton && variant === Variant.Header && radiobutton && (
        <TableCell></TableCell>
      )}
      {radiobutton &&
        variant === Variant.Body &&
        onChange != undefined &&
        selectedValue != undefined && (
          <TableCell>
            <TableRadioButton
              value={value}
              onChange={handleChange}
              selectedValue={selectedValue}
            ></TableRadioButton>
          </TableCell>
        )}
      {children}
    </tr>
  );
};

export default TableRow;
