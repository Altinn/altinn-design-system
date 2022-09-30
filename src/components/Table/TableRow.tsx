import React, { useState } from 'react';
import cn from 'classnames';

import type { ChangeProps } from '../ToggleButtonGroup/Context';

import classes from './TableRow.module.css';
import { useTableContext, useTableTypeContext, Variant } from './Context';
import { TableCell } from './TableCell';
import { TableRadioButton } from './TableRadioButton';

export interface TableRowProps {
  children?: React.ReactNode;
  value?: string;
}

export const TableRow = ({ children, value = 'no' }: TableRowProps) => {
  const [hover, setHover] = useState(false);
  const { variant } = useTableTypeContext();
  const { onChange, selectedValue, radiobutton } = useTableContext();
  const handleChange = ({ selectedValue: val }: ChangeProps) => {
    if (onChange != undefined) {
      onChange({ selectedValue: val });
      setHover(false);
    }
  };
  const handleFocus = () => {
    if (
      radiobutton == true &&
      value != selectedValue &&
      variant != Variant.Header
    ) {
      setHover(true);
    }
  };
  const handleMouseOver = () => {
    if (
      radiobutton == true &&
      value != selectedValue &&
      variant != Variant.Header
    ) {
      setHover(true);
    }
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <tr
      className={cn(
        classes.TableRow,
        {
          [classes['table-row--selected']]: value === selectedValue,
        },
        { [classes['table-row--hover']]: hover },
      )}
      onFocus={handleFocus}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <p>{hover.valueOf()}</p>
      {radiobutton == true &&
        variant == Variant.Header &&
        radiobutton == true && <TableCell></TableCell>}
      {radiobutton == true &&
        variant == Variant.Body &&
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
