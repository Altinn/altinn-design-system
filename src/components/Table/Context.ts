import { createContext, useContext } from 'react';

export enum Variant {
  Header = 'header',
  Body = 'body',
  Footer = 'footer',
}

export interface ChangeProps {
  selectedValue: string;
}

export type ChangeHandler = ({ selectedValue }: ChangeProps) => void;

export const TableContext = createContext<
  | {
      selectRows?: boolean;
      selectedValue?: string;
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

export const TableRowTypeContext = createContext({
  variant: Variant.Body,
});
export const useTableRowTypeContext = () => {
  const context = useContext(TableRowTypeContext);
  if (context === undefined) {
    throw new Error('useTableContext must be used within a TableTypeContext');
  }
  return context;
};
