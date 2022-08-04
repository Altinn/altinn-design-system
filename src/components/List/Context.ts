import { createContext, useContext } from 'react';

import type { BorderStyle } from './List';

export const ListContext = createContext<
  | {
      borderStyle: BorderStyle;
    }
  | undefined
>(undefined);

export const useListContext = () => {
  const context = useContext(ListContext);
  if (context === undefined) {
    throw new Error('useListContext must be used within an useListContext');
  }

  return context;
};
