import React from 'react';
import cn from 'classnames';

import type { ChangeHandler, AccordionContextProps } from './Context';
import { AccordionContext } from './Context';
import classes from './Accordion.module.css';

export interface AccordionProps {
  children: React.ReactNode;
  onChange: ChangeHandler;
  open: boolean;
}

export const Accordion = ({ children, open, onChange }: AccordionProps) => {
  const handleChange = ({ open: isOpen }: AccordionContextProps) => {
    onChange({ open: isOpen });
  };

  return (
    <div className={cn(classes['accordion'])}>
      <AccordionContext.Provider
        value={{
          onChange: handleChange,
          open,
        }}
      >
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

export default Accordion;
