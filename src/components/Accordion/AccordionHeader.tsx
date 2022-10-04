import React from 'react';
import cn from 'classnames';

import type { ButtonProps } from '../Button';

import classes from './AccordionHeader.module.css';
import { useAccordionContext } from './Context';
import { AccordionIcon } from './AccordionIcon';

export interface AccordionHeaderProps {
  children?: React.ReactNode;
  headerButton1?: React.ReactElement<ButtonProps>;
  headerButton2?: React.ReactElement<ButtonProps>;
  endText?: string;
  subtitle?: string;
}

export const AccordionHeader = ({
  children,
  headerButton1,
  headerButton2,
  endText,
  subtitle,
}: AccordionHeaderProps) => {
  const { onClick, open, headerId, contentId } = useAccordionContext();

  return (
    <div
      className={cn({
        [classes['accordion-header']]: true,
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
          <div className={cn(classes['accordion-header__subtitle'])}>
            {subtitle}
          </div>
        )}
      </button>
      {endText?.length && (
        <div className={cn(classes['accordion-header__end-text'])}>
          <p>{endText}</p>
        </div>
      )}
      <div className={cn(classes['accordion-header__buttons'])}>
        {headerButton2}
      </div>
      <div className={cn(classes['accordion-header__buttons'])}>
        {headerButton1}
      </div>
    </div>
  );
};

export default AccordionHeader;
