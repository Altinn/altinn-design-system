import { createContext, useContext } from 'react';

export enum PageColor {
  Primary = 'primary',
  Success = 'success',
}

export const PageContext = createContext({
  color: PageColor.Primary,
});

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error('usePageContext must be used within a PageContext');
  }

  return context;
};
