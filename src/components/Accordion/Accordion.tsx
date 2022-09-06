import React, { useId } from 'react';

import type { AccordionIconVariant, ClickHandler } from './Context';
import { AccordionContext } from './Context';
import classes from './Accordion.module.css';

export interface AccordionProps {
  children?: React.ReactNode;
  onClick: ClickHandler;
  open: boolean;
  iconVariant: AccordionIconVariant;
}

export const Accordion = ({
  children,
  open,
  onClick,
  iconVariant,
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
          iconVariant,
        }}
      >
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

export default Accordion;
