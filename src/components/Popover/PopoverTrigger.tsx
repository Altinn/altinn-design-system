import * as RadixPopover from '@radix-ui/react-popover';
import React from 'react';

export interface PopoverTriggerProps {
  children?: React.ReactNode;
}

export const PopoverTrigger = ({ children }: PopoverTriggerProps) => {
  return (
    <RadixPopover.Trigger
      asChild
      data-testid='popover-trigger'
      role='button'
    >
      {children}
    </RadixPopover.Trigger>
  );
};
