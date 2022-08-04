import { createContext, useContext } from 'react';

import { BorderStyle } from './List';

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
