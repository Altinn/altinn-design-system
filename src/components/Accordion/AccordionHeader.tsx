import cl from 'classnames';
import React, { useContext } from 'react';

import { AccordionItemContext } from './Contexts';

export interface AccordionHeaderProps{
  children: React.ReactNode;
  onClick: () => boolean;
}

export const AccordionHeader = ({ children, onClick } : AccordionHeaderProps) => {
    const context = useContext(AccordionItemContext);


    if (context === null) {
      console.error(
        '<Accordion.Header> has to be used within an <Accordion.Item>',
      );
      return null;
    }

    const handleClick = (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
      context.toggleOpen();
      onClick && onClick(e);
    };

    return (
      <button
        className={
        }
        onClick={handleClick}
        aria-expanded={context.open}
      >
        {children}
        <Expand
          aria-hidden
          className={cl('navds-accordion__expand-icon', {
            'navds-accordion__expand-icon--flip': context.open,
          })}
        />
        <ExpandFilled
          aria-hidden
          className={cl(
            'navds-accordion__expand-icon',
            'navds-accordion__expand-icon--filled',
            {
              'navds-accordion__expand-icon--flip': context.open,
            },
          )}
        />
      </button>
    );
  },
);

export default AccordionHeader;
