import React from 'react';
import cn from 'classnames';

import classes from './AccordionContent.module.css';
import { useAccordionContext } from './Context';

export interface AccordionContentProps {
  children?: React.ReactNode;
  open: boolean;
}

export const AccordionContent = ({ children }: AccordionContentProps) => {
  const { open } = useAccordionContext();

  return (
    <div>
      {open && ( // eslint-disable-next-line
      <div
          className={cn(classes['accordion-content'], {
            [classes['accordion-content--opened']]: open,
          })}
          aria-expanded={open}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionContent;
