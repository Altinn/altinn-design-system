import React from 'react';
import cn from 'classnames';

import type { ClickHandler, AccordionContextProps } from './Context';
import { AccordionContext } from './Context';
import classes from './Accordion.module.css';

export interface AccordionItemProps {
  children: React.ReactNode;
  onClick: ClickHandler;
  open: boolean;
}

export const Accordion = ({ children, open, onClick }: AccordionItemProps) => {
  const handleClick = ({ open: isOpen }: AccordionContextProps) => {
    onClick({ open: isOpen });
  };

  return (
    <div className={cn(classes['accordion'])}>
      <AccordionContext.Provider
        value={{
          onClick: handleClick,
          open,
        }}
      >
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

export default Accordion;
