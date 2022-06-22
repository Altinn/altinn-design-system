import { createContext, useContext } from 'react';

export interface AccordionContextProps {
  open: boolean;
}

export type ChangeHandler = ({ open }: AccordionContextProps) => void;

export const AccordionContext = createContext<
  { open: boolean; onChange: ChangeHandler } | undefined
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
