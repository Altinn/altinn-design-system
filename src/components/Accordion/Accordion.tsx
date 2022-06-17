import React from 'react';
import cn from 'classnames';

import type { ValueChangeProps, ValueChangeHandler } from './ValueContext';
import { AccordionValueContext } from './ValueContext';
import { AccordionCollapsibleContext } from './CollapsibleContext';
import classes from './Accordion.module.css';

export interface AccordionProps {
  children?: React.ReactNode;
  value?: string;
  onValueChange: ValueChangeHandler;
}

export const Accordion = ({
  children,
  value,
  onValueChange,
}: AccordionProps) => {
  const handleOnValueChange = ({ value: val }: ValueChangeProps) => {
    onValueChange({ value: val });
  };

  return (
    <AccordionValueContext.Provider
      value={{ onValueChange: handleOnValueChange, value }}
    >
      <AccordionCollapsibleContext.Provider value={{}}>
        {children}
      </AccordionCollapsibleContext.Provider>
    </AccordionValueContext.Provider>
  );
};
