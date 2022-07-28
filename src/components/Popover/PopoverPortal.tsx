import React from 'react';
import cn from 'classnames';
import * as RadixPopover from '@radix-ui/react-popover';

export interface PopoverPortalProps {
  children?: React.ReactNode;
  forceMount?: true;
  container?: HTMLElement;
}

export const PopoverPortal = ({
  children,
  forceMount = undefined,
  container = document.body,
}: PopoverPortalProps) => {
  return (
    <RadixPopover.Portal
      forceMount={forceMount}
      container={container}
    >
      {children}
    </RadixPopover.Portal>
  );
};

export default PopoverPortal;
