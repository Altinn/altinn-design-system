import React, { useId } from 'react';

import type { ClickHandler } from './Context';
import { AccordionVariant, AccordionContext } from './Context';
import classes from './Accordion.module.css';

export interface AccordionProps {
  children?: React.ReactNode;
  onClick: ClickHandler;
  open: boolean;
  variant: AccordionVariant;
}

export const Accordion = ({
  children,
  open,
  onClick,
  variant = AccordionVariant.Primary,
}: AccordionProps) => {
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
          variant,
        }}
      >
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

export default Accordion;
