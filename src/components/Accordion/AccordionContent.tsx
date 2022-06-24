import React from 'react';
import cn from 'classnames';

import { useAccordionContext } from './Context';

export interface AccordionContentProps {
  children?: React.ReactNode;
}

export const AccordionContent = ({ children }: AccordionContentProps) => {
  const { open } = useAccordionContext();

  return <div>{open && <div aria-expanded={open}>{children}</div>}</div>;
};

export default AccordionContent;
