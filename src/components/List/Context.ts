import { createContext, useContext } from 'react';

export enum BorderStyle {
  Solid = 'solid',
  Dashed = 'dashed',
}

export const ListContext = createContext({
  borderStyle: BorderStyle.Solid,
});

export const useListContext = () => {
  const context = useContext(ListContext);
  if (context === undefined) {
    throw new Error('useListContext must be used within a ListContext');
  }

  return context;
};
