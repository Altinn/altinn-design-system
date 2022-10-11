import React from 'react';
import cn from 'classnames';

import classes from './AccordionHeader.module.css';
import { useAccordionContext } from './Context';
import { AccordionIcon } from './AccordionIcon';

export interface AccordionHeaderProps {
  children?: React.ReactNode;
  actions?: React.ReactNode;
  subtitle?: string;
}

export const AccordionHeader = ({
  children,
  actions,
  subtitle,
}: AccordionHeaderProps) => {
  const { onClick, open, headerId, contentId } = useAccordionContext();

  return (
    <div
      className={cn(classes['accordion-header'], {
        [classes['accordion-header--subtitle']]: subtitle,
      })}
    >
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
        {subtitle?.length && (
          <div
            data-testid='accordion-header-subtitle'
            className={cn(classes['accordion-header__subtitle'])}
          >
            {subtitle}
          </div>
        )}
      </button>
      <div className={cn(classes['accordion-header__actions'])}>{actions}</div>
    </div>
  );
};
