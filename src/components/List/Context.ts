import { createContext, useContext } from 'react';

export enum BorderStyle {
  Solid = 'solid',
  Dashed = 'dashed',
}

export const ListContext = createContext<
  | {
      borderStyle: BorderStyle;
    }
  | undefined
>(undefined);

export const useListContext = () => {
  const context = useContext(ListContext);
  if (context === undefined) {
    throw new Error('useListContext must be used within an useLiseContext');
  }

  return context;
};
