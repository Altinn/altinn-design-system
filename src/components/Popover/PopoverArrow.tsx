import React from 'react';
import cn from 'classnames';
import * as RadixPopover from '@radix-ui/react-popover';

import classes from './PopoverArrow.module.css';
import { usePopoverContext } from './Context';

export const PopoverArrow = () => {
  const { popoverVariant } = usePopoverContext();
  return (
    <RadixPopover.Arrow
      className={cn(classes['popover-arrow'], [
        classes[`popover-arrow--${popoverVariant}`],
      ])}
    ></RadixPopover.Arrow>
  );
};

export default PopoverArrow;
