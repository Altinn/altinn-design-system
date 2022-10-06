import React from 'react';
import cn from 'classnames';

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
    if (onChange != undefined && selectRows && variant === Variant.Body) {
      onChange({ selectedValue: value });
    }
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLTableRowElement>) => {
    if ((event.key === 'Enter' || event.key === ' ') && onChange != undefined) {
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
      tabIndex={variant === Variant.Body && selectRows ? 0 : undefined}
      onKeyDown={(event) => handleEnter(event)}
    >
      {children}
    </tr>
  );
};

export default TableRow;