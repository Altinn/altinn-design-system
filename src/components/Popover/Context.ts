import { createContext, useContext } from 'react';

export enum PopoverVariant {
  Warning = 'warning',
  Error = 'error',
  Neutral = 'neutral',
}

export const PopoverContext = createContext({
  popoverVariant: PopoverVariant.Neutral,
});

export const usePopoverContext = () => {
  const context = useContext(PopoverContext);
  if (context === undefined) {
    throw new Error('usePopoverContext must be used within a PopoverContext');
  }

  return context;
};
