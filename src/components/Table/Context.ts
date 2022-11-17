import { createContext, useContext } from 'react';

import type { SortDirection } from './TableCell';
import type { RowData } from './TableRow';

export enum Variant {
  Header = 'header',
  Body = 'body',
  Footer = 'footer',
}

export interface ChangeProps {
  selectedValue: RowData;
}
export interface SortProps {
  idCell: string;
  previousSortDirection: SortDirection;
}

export type ChangeHandler = ({ selectedValue }: ChangeProps) => void;
export type SortHandler = ({
  idCell,
  previousSortDirection,
}: SortProps) => void;

export const TableContext = createContext<
  | {
      selectRows?: boolean;
      selectedValue?: RowData;
      onChange?: ChangeHandler;
    }
  | undefined
>(undefined);
export const useTableContext = () => {
  const context = useContext(TableContext);
  if (context === undefined) {
    throw new Error('useTableContext must be used within a TableContext');
  }
  return context;
};

export const SortContext = createContext<
  | {
      selectSort?: string;
    }
  | undefined
>(undefined);
export const useSortContext = () => {
  const context = useContext(SortContext);
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
