import { useContext, createContext } from 'react';

export interface ValueChangeProps {
  value?: string;
}

export type ValueChangeHandler = ({ value }: ValueChangeProps) => void;

export const AccordionValueContext = createContext<
  { onValueChange: ValueChangeHandler; value?: string } | undefined
>(undefined);

export const useAccordionValueContext = () => {
  const context = useContext(AccordionValueContext);
  if (context === undefined) {
    throw new Error(
      'useAccordionValueContext must be used within a AccordionContext',
    );
  }

  return context;
};
