import React from 'react';
import cn from 'classnames';

import classes from './AccordionIcon.module.css';
import { useAccordionContext, AccordionIconVariant } from './Context';
import { ReactComponent as Arrow } from './expand-collapse.svg';
import { ReactComponent as CircleArrow } from './CircleArrow.svg';

export interface AccordionIconProps {
  height?: string;
  width?: string;
}

export const AccordionIcon = ({
  height = '20',
  width = '20',
}: AccordionIconProps) => {
  const { onClick, open, iconVariant } = useAccordionContext();
  const props = { height, width };
  const iconClassnames = [
    classes[`accordion-icon`],
    {
      [classes['accordion-icon--opened']]: open,
    },
  ];
  switch (iconVariant) {
    case AccordionIconVariant.Primary:
      return (
        <Arrow
          className={cn(iconClassnames)}
          {...props}
          onClick={onClick}
        />
      );
    case AccordionIconVariant.Secondary:
      return (
        <CircleArrow
          className={cn(iconClassnames)}
          {...props}
          onClick={onClick}
        />
      );
  }
};

export default AccordionIcon;
