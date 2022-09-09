import React from 'react';
import cn from 'classnames';

import classes from './AccordionIcon.module.css';
import { useAccordionContext, AccordionIconVariant } from './Context';
import { ReactComponent as Arrow } from './expand-collapse.svg';
import { ReactComponent as CircleArrow } from './CircleArrow.svg';

export const AccordionIcon = () => {
  const { onClick, open, iconVariant } = useAccordionContext();
  const iconClassnames = [
    classes[`accordion-icon`],
    {
      [classes['accordion-icon--opened']]: open,
    },
  ];
  const props = {
    height: 20,
    width: 20,
    className: cn(iconClassnames),
    ['data-testid']: iconVariant,
    onClick,
  };

  switch (iconVariant) {
    case AccordionIconVariant.Primary:
      return <Arrow {...props} />;
    case AccordionIconVariant.Secondary:
      return <CircleArrow {...props} />;
  }
};

export default AccordionIcon;
