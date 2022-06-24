import React from 'react';
import cn from 'classnames';

import classes from './AccordionHeader.module.css';
import { useAccordionContext } from './Context';
import { ReactComponent as ExpandCollapseArrow } from './expand-collapse.svg';

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
      <ExpandCollapseArrow
        className={cn(classes['accordion-header-icon'], {
          [classes['accordion-header-icon__opened']]: open,
        })}
        width='12'
        height='18'
        onClick={onClick}
      />
      <button
        className={cn(classes['accordion-header-title'])}
        aria-expanded={open}
        type='button'
        onClick={onClick}
      >
        {children}
      </button>
      <div className={cn(classes['accordion-header__actions'])}>{actions}</div>
    </div>
  );
};

export default AccordionHeader;
