import React from 'react';
import cn from 'classnames';

import classes from './AccordionHeader.module.css';
import { useAccordionContext } from './Context';

export interface AccordionHeaderProps {
  children?: React.ReactNode;
}

export const AccordionHeader = ({ children }: AccordionHeaderProps) => {
  const { onChange, open } = useAccordionContext();

  const handleChange = () => {
    onChange({ open });
  };

  return (
    <button
      className={cn(classes['accordion-header'])}
      onClick={handleChange}
      aria-expanded={open}
      type='button'
    >
      {children}
    </button>
  );
};

export default AccordionHeader;
