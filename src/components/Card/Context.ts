import { createContext, useContext } from 'react';

export enum CardVariant {
  Primary = 'primary',
}

export const CardContext = createContext({
  variant: CardVariant.Primary,
});

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error('useCardContext must be used within a CardContext');
  }

  return context;
};
