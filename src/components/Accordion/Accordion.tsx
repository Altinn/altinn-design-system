import React, { useId } from 'react';

import type { ClickHandler } from './Context';
import { AccordionContext } from './Context';
import classes from './Accordion.module.css';

export interface AccordionProps {
  children?: React.ReactNode;
  onClick: ClickHandler;
  open: boolean;
}

export const Accordion = ({ children, open, onClick }: AccordionProps) => {
  const headerId = useId();
  const contentId = useId();
  return (
    <div className={classes['accordion']}>
      <AccordionContext.Provider
        value={{
          onClick,
          open,
          headerId,
          contentId,
        }}
      >
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

export default Accordion;
