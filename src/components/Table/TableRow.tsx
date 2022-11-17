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

export interface TableRowProps
  extends Omit<
    HTMLProps<HTMLTableRowElement>,
    'onClick' | 'tabIndex' | 'onKeyUp'
  > {
  children?: React.ReactNode;
  value?: string;
  selectSort?: string;
}

export const TableRow = ({
  children,
  value = 'no',
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
      variantStandard === Variant.Body
    ) {
      onChange({ selectedValue: value });
    }
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLTableRowElement>) => {
    if ((event.key === 'Enter' || event.key === ' ') && onChange != undefined) {
      onChange({ selectedValue: value });
    }
  };

  return (
    <SortContext.Provider value={{ selectSort }}>
      <tr
        {...tableRowProps}
        className={cn(
          classes.TableRow,
          {
            [classes['table-row--selected']]: value === selectedValue,
            [classes['table-row--body']]:
              variantStandard === Variant.Body &&
              selectRows &&
              value !== selectedValue,
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
