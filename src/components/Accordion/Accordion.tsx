import React from 'react';
import cn from 'classnames';

import type { ClickHandler } from './Context';
import { AccordionContext } from './Context';
import classes from './Accordion.module.css';

export interface AccordionProps {
  children: React.ReactNode;
  onClick: ClickHandler;
  open: boolean;
}

export const Accordion = ({ children, open, onClick }: AccordionProps) => {
  return (
    <div className={cn(classes['accordion'])}>
      <AccordionContext.Provider
        value={{
          onClick,
          open,
        }}
      >
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

export default Accordion;
