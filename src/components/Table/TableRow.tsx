import type { HTMLProps } from 'react';
import React from 'react';
import cn from 'classnames';

import classes from './TableRow.module.css';
import {
  SortContext,
  useTableContext,
  useTableRowTypeContext,
  Variant,
} from './Context';

export interface RowData {
  [x: string]: string;
}

export interface TableRowProps
  extends Omit<
    HTMLProps<HTMLTableRowElement>,
    'onClick' | 'tabIndex' | 'onKeyUp'
  > {
  children?: React.ReactNode;
  rowData?: RowData;
  selectSort?: string;
}

export const TableRow = ({
  children,
  rowData,
  selectSort = '',
  className,
  ...tableRowProps
}: TableRowProps) => {
  const { variantStandard } = useTableRowTypeContext();
  const { onChange, selectedValue, selectRows } = useTableContext();
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

  const handleEnter = (event: React.KeyboardEvent<HTMLTableRowElement>) => {
    if (
      (event.key === 'Enter' || event.key === ' ') &&
      onChange != undefined &&
      selectedValue &&
      rowData
    ) {
      onChange({ selectedValue: rowData });
    }
  };
  return (
    <SortContext.Provider value={{ selectSort }}>
      <tr
        {...tableRowProps}
        className={cn(
          classes.TableRow,
          {
            [classes['table-row--selected']]:
              JSON.stringify(rowData) === JSON.stringify(selectedValue),
            [classes['table-row--body']]:
              variantStandard === Variant.Body &&
              selectRows &&
              JSON.stringify(rowData) !== JSON.stringify(selectedValue),
          },
          className,
        )}
        onClick={handleClick}
        tabIndex={
          variantStandard === Variant.Body && selectRows ? 0 : undefined
        }
        onKeyUp={(event) => handleEnter(event)}
      >
        {children}
      </tr>
    </SortContext.Provider>
  );
};

export default TableRow;
