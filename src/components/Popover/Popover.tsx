import React from 'react';
import cn from 'classnames';
import * as RadixPopover from '@radix-ui/react-popover';

import { PopoverVariant, PopoverContext } from './Context';
import classes from './Popover.module.css';

export interface PopoverProps {
  children?: React.ReactNode;
  popoverVariant?: PopoverVariant;
}

export const Popover = ({
  children,
  popoverVariant = PopoverVariant.Unstyled,
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
