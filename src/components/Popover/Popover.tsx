import React from 'react';
import * as RadixPopover from '@radix-ui/react-popover';

import { PopoverContext, PopoverVariant } from './Context';

export interface PopoverProps {
  children?: React.ReactNode;
  variant?: PopoverVariant;
}

export const Popover = ({
  children,
  variant: popoverVariant = PopoverVariant.Neutral,
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
