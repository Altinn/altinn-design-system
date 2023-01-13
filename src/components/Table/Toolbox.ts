import { createContext, useContext } from 'react';

export enum Variant {
  Header = 'header',
  Body = 'body',
  Footer = 'footer',
}

export enum SortDirection {
  Descending = 'desc',
  Ascending = 'asc',
  NotSortable = 'notSortable',
  NotActive = 'notActive',
}

export interface ChangeProps<T> {
  selectedValue: T;
}

export interface SortProps {
  next: SortDirection;
  previous: SortDirection;
}

export type ChangeHandler<T> = ({ selectedValue }: ChangeProps<T>) => void;
export type SortHandler = ({ previous }: SortProps) => void;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface TableContextType<T = any> {
  selectRows?: boolean;
  selectedValue?: T;
  onChange?: ChangeHandler<T>;
}

export const TableContext = createContext<TableContextType>(
  // The first parameter is required, but we handle this by throwing an error in useTableContext instead.
  undefined as unknown as TableContextType,
);

export function useTableContext<T>() {
  const context = useContext<TableContextType<T>>(TableContext);
  if (context === undefined) {
    throw new Error('useTableContext must be used within a TableContext');
  }
  return context;
}

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
