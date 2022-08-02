import React from 'react';
import * as RadixPopover from '@radix-ui/react-popover';

import { PopoverContext } from './Context';

export enum PopoverVariant {
  Warning = 'warning',
  Error = 'error',
}

export interface PopoverProps {
  children?: React.ReactNode;
  variant: PopoverVariant;
}

export const Popover = ({
  children,
  variant: popoverVariant = PopoverVariant.Warning,
}: PopoverProps) => {
  return (
    <RadixPopover.Root>
      <PopoverContext.Provider value={{ popoverVariant }}>
        {children}
      </PopoverContext.Provider>
    </RadixPopover.Root>
  );
};

export default Popover;
