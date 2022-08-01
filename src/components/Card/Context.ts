import { createContext, useContext } from 'react';

export enum CardVariant {
  ProfilePrimaryCard = 'profile-primary-card',
}

export const CardContext = createContext<
  | {
      cardVariant: CardVariant;
    }
  | undefined
>(undefined);

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error('useCardContext must be used within CardContext');
  }

  return context;
};
