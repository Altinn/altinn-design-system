import React, { useId } from 'react';

import type { ClickHandler } from './Context';
import { AccordionIconVariant, AccordionContext } from './Context';
import classes from './Accordion.module.css';
import type { AccordionHeaderProps } from './AccordionHeader';
import AccordionHeader from './AccordionHeader';

export interface AccordionProps extends AccordionHeaderProps {
  children?: React.ReactNode;
  onClick: ClickHandler;
  open: boolean;
  headerTitle: string;
  iconVariant?: AccordionIconVariant;
}

export const Accordion = ({
  children,
  open,
  onClick,
  iconVariant = AccordionIconVariant.Primary,
  headerTitle,
  headerButton1,
  headerButton2,
  endText,
  subtitle,
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
        <AccordionHeader
          headerButton1={headerButton1}
          headerButton2={headerButton2}
          endText={endText}
          subtitle={subtitle}
        >
          {headerTitle}
        </AccordionHeader>
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

export default Accordion;
