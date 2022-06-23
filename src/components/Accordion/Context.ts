import { createContext, useContext } from 'react';

export type ClickHandler = () => void;

export const AccordionContext = createContext<
  { open: boolean; onClick: ClickHandler } | undefined
>(undefined);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (context === undefined) {
    throw new Error(
      'useAccordionContext must be used within a AccordionContext',
    );
  }

  return context;
};
