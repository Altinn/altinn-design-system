import React from 'react';

import { useAccordionContext } from './Context';

export interface AccordionContentProps {
  children?: React.ReactNode;
}

export const AccordionContent = ({ children }: AccordionContentProps) => {
  const { open, contentId, headerId } = useAccordionContext();

  return (
    <div>
      {open && (
        <div
          aria-expanded={open}
          id={contentId}
          aria-labelledby={headerId}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionContent;
