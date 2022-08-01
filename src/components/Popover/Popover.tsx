import React from 'react';
import * as RadixPopover from '@radix-ui/react-popover';

import { PopoverContext } from './Context';

export enum PopoverVariant {
  Yellow = 'yellow',
  Red = 'red',
  White = 'white',
}

export interface PopoverProps {
  children?: React.ReactNode;
  popoverVariant: PopoverVariant;
}

export const Popover = ({
  children,
  popoverVariant = PopoverVariant.White,
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
