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

export interface TableRowProps {
  children?: React.ReactNode;
  value?: RowData;
  selectSort?: string;
}

export const TableRow = ({
  children,
  value,
  selectSort = '',
}: TableRowProps) => {
  const { variantStandard } = useTableRowTypeContext();
  const { onChange, selectedValue, selectRows } = useTableContext();
  const handleClick = () => {
    if (
      onChange != undefined &&
      selectRows &&
      variantStandard === Variant.Body &&
      value
    ) {
      onChange({ selectedValue: value });
    }
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLTableRowElement>) => {
    if (
      (event.key === 'Enter' || event.key === ' ') &&
      onChange != undefined &&
      selectedValue &&
      value
    ) {
      onChange({ selectedValue: value });
    }
  };

  return (
    <SortContext.Provider value={{ selectSort }}>
      <tr
        className={cn(classes.TableRow, {
          [classes['table-row--selected']]: value === selectedValue,
          [classes['table-row--body']]:
            variantStandard === Variant.Body &&
            selectRows &&
            value !== selectedValue,
        })}
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
