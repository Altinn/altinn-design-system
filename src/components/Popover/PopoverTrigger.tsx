import React from 'react';
import cn from 'classnames';
import * as RadixPopover from '@radix-ui/react-popover';

export interface PopoverTriggerProps {
  children?: React.ReactNode;
  asChild?: boolean;
}

export const PopoverTrigger = ({
  children,
  asChild = false,
}: PopoverTriggerProps) => {
  return (
    <RadixPopover.Trigger asChild={asChild}>{children}</RadixPopover.Trigger>
  );
};

export default PopoverTrigger;
