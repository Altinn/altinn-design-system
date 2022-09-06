import { createContext, useContext } from 'react';

export enum AccordionVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}

export type ClickHandler = () => void;

export const AccordionContext = createContext<
  | {
      open: boolean;
      onClick: ClickHandler;
      headerId: string;
      contentId: string;
      variant: AccordionVariant;
    }
  | undefined
>(undefined);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (context === undefined) {
    throw new Error(
      'useAccordionContext must be used within an AccordionContext',
    );
  }

  return context;
};
