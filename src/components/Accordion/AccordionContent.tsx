import React from 'react';

import { useAccordionContext } from './Context';

export interface AccordionContentProps {
  children?: React.ReactNode;
  contentId: string;
  headerId: string;
}

export const AccordionContent = ({
  children,
  contentId,
  headerId,
}: AccordionContentProps) => {
  const { open } = useAccordionContext();

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
