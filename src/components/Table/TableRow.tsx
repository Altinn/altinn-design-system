import type { HTMLProps } from 'react';
import React from 'react';
import cn from 'classnames';

import classes from './TableRow.module.css';
import { useTableContext, useTableRowTypeContext, Variant } from './Toolbox';

export interface TableRowProps<T>
  extends Omit<
    HTMLProps<HTMLTableRowElement>,
    'onClick' | 'tabIndex' | 'onKeyUp'
  > {
  children?: React.ReactNode;
  rowData?: T;
}

export function TableRow<T>({
  children,
  rowData,
  className,
  ...tableRowProps
}: TableRowProps<T>) {
  const { variantStandard } = useTableRowTypeContext();
  const { onChange, selectedValue, selectRows } = useTableContext<T>();
  const handleClick = () => {
    if (
      onChange != undefined &&
      selectRows &&
      variantStandard === Variant.Body &&
      rowData
    ) {
      onChange({ selectedValue: rowData });
    }
  };
  const isSelected =
    selectRows &&
    typeof rowData !== 'undefined' &&
    JSON.stringify(rowData) === JSON.stringify(selectedValue);

  return (
    <tr
      {...tableRowProps}
      className={cn(
        classes.TableRow,
        {
          [classes['table-row--selected']]: isSelected,
          [classes['table-row--body']]:
            variantStandard === Variant.Body && selectRows && !isSelected,
        },
        className,
      )}
      onClick={handleClick}
    >
      {children}
    </tr>
  );
}
