import React from 'react';
import cn from 'classnames';
import * as RadixPopover from '@radix-ui/react-popover';

import classes from './PopoverArrow.module.css';
import { usePopoverContext } from './Context';
export interface PopoverArrowProps {
  children?: string;
}
export const PopoverArrow = ({ children }: PopoverArrowProps) => {
  const { popoverVariant } = usePopoverContext();
  return (
    <RadixPopover.Arrow
      className={cn(classes[`popover-arrow--${popoverVariant}`])}
    >
      {children}
    </RadixPopover.Arrow>
  );
};

export default PopoverArrow;
