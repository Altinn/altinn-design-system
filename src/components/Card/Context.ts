import { createContext, useContext } from 'react';

export enum CardVariant {
  Primary = 'primary',
}

export const CardContext = createContext({
  variant: CardVariant,
});

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error('useCardContext must be used within CardContext');
  }

  return context;
};
