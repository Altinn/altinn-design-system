import { createContext, useContext } from 'react';

export const PopoverContext = createContext<
  | {
      popoverVariant: PopoverVariant;
    }
  | undefined
>(undefined);

export const usePopoverContext = () => {
  const context = useContext(PopoverContext);
  if (context === undefined) {
    throw new Error('usePopoverContext must be used within a PopoverContext');
  }

  return context;
};
