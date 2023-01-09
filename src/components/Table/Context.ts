import { createContext, useContext } from 'react';

import type { SortDirection } from './TableCell';
import type { RowData } from './TableRow';

export enum ScreenSize {
  Mobile = 'mobile',
  Laptop = 'laptop',
}

export enum Variant {
  Header = 'header',
  Body = 'body',
  Footer = 'footer',
}

export interface ChangeProps {
  selectedValue: RowData;
}
export interface SortProps {
  sortedColumn: string;
  previousSortDirection: SortDirection;
}

export type ChangeHandler = ({ selectedValue }: ChangeProps) => void;
export type SortHandler = ({
  sortedColumn,
  previousSortDirection,
}: SortProps) => void;

export interface TableContextType {
  selectRows?: boolean;
  selectedValue?: RowData;
  onChange?: ChangeHandler;
  screenSize: ScreenSize;
}

export const TableContext = createContext<TableContextType>(
  // The first parameter is required, but we handle this by throwing an error in useTableContext instead.
  undefined as unknown as TableContextType,
);
export const useTableContext = () => {
  const context = useContext(TableContext);
  if (context === undefined) {
    throw new Error('useTableContext must be used within a TableContext');
  }
  return context;
};

export const TableRowTypeContext = createContext({
  variantStandard: Variant.Body,
});
export const useTableRowTypeContext = () => {
  const context = useContext(TableRowTypeContext);
  if (context === undefined) {
    throw new Error('useTableContext must be used within a TableTypeContext');
  }
  return context;
};
