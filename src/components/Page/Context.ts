import { createContext, useContext } from 'react';

export enum PageVariant {
  Primary = 'primary',
}

export const PageContext = createContext({
  variant: PageVariant.Primary,
});

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error('usePageContext must be used within a PageContext');
  }

  return context;
};
