import React from 'react';
import cn from 'classnames';

import classes from './AccordionHeader.module.css';
import { useAccordionContext } from './Context';
import { AccordionIcon } from './AccordionIcon';

export interface AccordionHeaderProps {
  children?: React.ReactNode;
  actions?: React.ReactNode;
}

export const AccordionHeader = ({
  children,
  actions,
}: AccordionHeaderProps) => {
  const { onClick, open, headerId, contentId } = useAccordionContext();

  return (
    <div className={cn(classes['accordion-header'])}>
      <AccordionIcon />
      <button
        className={cn(classes['accordion-header__title'])}
        aria-expanded={open}
        type='button'
        onClick={onClick}
        id={headerId}
        aria-controls={contentId}
      >
        {children}
      </button>
      <div className={cn(classes['accordion-header__actions'])}>{actions}</div>
    </div>
  );
};

export default AccordionHeader;
