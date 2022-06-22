import React from 'react';
import cn from 'classnames';

import classes from './AccordionHeader.module.css';
import { useAccordionContext } from './Context';
import { ReactComponent as ExpandCollapseArrow } from './expand-collapse.svg';

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
      <ExpandCollapseArrow
        width='24'
        height='24'
      />
      {children}
    </button>
  );
};

export default AccordionHeader;
