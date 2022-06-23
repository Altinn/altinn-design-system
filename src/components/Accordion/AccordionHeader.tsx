import React from 'react';
import cn from 'classnames';

import classes from './AccordionHeader.module.css';
import { useAccordionContext } from './Context';

export interface AccordionHeaderProps {
  children?: React.ReactNode;
  actions?: React.ReactNode;
}

export const AccordionHeader = ({
  children,
  actions,
}: AccordionHeaderProps) => {
  const { onClick, open } = useAccordionContext();

  return (
    <div className={cn(classes['accordion-header'])}>
      <button
        className={cn(classes['accordion-header-button'])}
        onClick={onClick}
        aria-expanded={open}
        type='button'
      >
        {children}
      </button>
      <div className={cn(classes['accordion-header__actions'])}>{actions}</div>
    </div>
  );
};

export default AccordionHeader;
