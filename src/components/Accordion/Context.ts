import { createContext, useContext } from 'react';

export interface AccordionContextProps {
  open: boolean;
}

export type ClickHandler = ({ open }: AccordionContextProps) => void;

export const AccordionContext = createContext<
  { open: boolean; onClick: ClickHandler } | undefined
>(undefined);

export const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (context === undefined) {
    throw new Error(
      'useToggleButtonContext must be used within a ToggleButtonGroupContext',
    );
  }

  return context;
};
