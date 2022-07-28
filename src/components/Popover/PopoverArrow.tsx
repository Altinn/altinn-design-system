import React from 'react';
import cn from 'classnames';
import * as RadixPopover from '@radix-ui/react-popover';

import classes from './PopoverContent.module.css';

export interface PopoverContentProps {
  children?: string;
  asChild?: boolean;
  width?: number;
  height?: number;
}

export const PopoverArrow = ({
  children,
  asChild = false,
  width = 10,
  height = 5,
}: PopoverContentProps) => {
  return (
    <RadixPopover.Arrow
      asChild={asChild}
      width={width}
      height={height}
    >
      {children}
    </RadixPopover.Arrow>
  );
};

export default PopoverArrow;
