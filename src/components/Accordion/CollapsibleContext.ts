import { useContext, createContext } from 'react';

export interface CollapsibleChangeProps {
  isCollapsed: boolean;
}

export type CollapsibleChangeHandler = ({
  isCollapsed,
}: CollapsibleChangeProps) => void;

export const AccordionCollapsibleContext = createContext<
  { onChange: CollapsibleChangeHandler; collapsed: boolean } | undefined
>(undefined);

export const useAccordionCollapsibleContext = () => {
  const context = useContext(AccordionCollapsibleContext);
  if (context === undefined) {
    throw new Error(
      'useAccordionCollapsibleContext must be used within a AccordionContext',
    );
  }

  return context;
};
