import React from 'react';
import cn from 'classnames';

import classes from './AccordionHeader.module.css';
import { useAccordionContext } from './Context';
import { ReactComponent as ExpandCollapseArrow } from './expand-collapse.svg';
import { ReactComponent as BlueArrow } from './BlueArrow.svg';

export enum AccordionHeaderVariant {
  Primary = 'primary',
  Secondary = 'secondary',
}
export interface AccordionHeaderProps {
  children?: React.ReactNode;
  actions?: React.ReactNode;
  variant?: AccordionHeaderVariant;
}

export const AccordionHeader = ({
  children,
  actions,
  variant = AccordionHeaderVariant.Primary,
}: AccordionHeaderProps) => {
  const { onClick, open, headerId, contentId } = useAccordionContext();

  return (
    <div className={cn(classes['accordion-header'])}>
      {(() => {
        switch (variant) {
          case AccordionHeaderVariant.Primary:
            return (
              <ExpandCollapseArrow
                className={cn(
                  classes[`accordion-header__icon--${variant}`],
                  classes[`accordion-header__icon`],
                  {
                    [classes['accordion-header__icon--opened']]: open,
                  },
                )}
                height='16'
                onClick={onClick}
              />
            );
          case AccordionHeaderVariant.Secondary:
            return (
              <BlueArrow
                className={cn(
                  classes[`accordion-header__icon--${variant}`],
                  classes[`accordion-header__icon`],
                  {
                    [classes['accordion-header__icon--opened']]: open,
                  },
                )}
                height='24'
                onClick={onClick}
              />
            );
        }
      })()}
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
