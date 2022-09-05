import React from 'react';
import cn from 'classnames';

import classes from './AccordionHeader.module.css';
import { useAccordionContext } from './Context';
import { ReactComponent as ExpandCollapseArrow } from './expand-collapse.svg';
import { ReactComponent as BlueArrow } from './BlueArrow.svg';

export enum AccordionHeaderVariant {
  sent = 'sent',
  finished = 'finished',
}
export interface AccordionHeaderProps {
  children?: React.ReactNode;
  actions?: React.ReactNode;
  variant;
}

export const AccordionHeader = ({
  children,
  actions,
}: AccordionHeaderProps) => {
  const { onClick, open, headerId, contentId } = useAccordionContext();

  return (
    <div className={cn(classes['accordion-header'])}>
      <ExpandCollapseArrow
        className={cn(classes['accordion-header__icon'], {
          [classes['accordion-header__icon--opened']]: open,
        })}
        width='12'
        height='18'
        onClick={onClick}
      />
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
