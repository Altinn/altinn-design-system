import React, { createContext } from 'react';

export interface AccordionItemContextProps {
  open: boolean;
  toggleOpen: () => void;
  renderContentWhenClosed: boolean;
}

export const AccordionItemContext =
  createContext<AccordionItemContextProps | null>(null);
