import React from 'react';
import cn from 'classnames';
import * as RadixPopover from '@radix-ui/react-popover';

export interface PopoverAnchorProps {
  children?: React.ReactNode;
  asChild: boolean;
}

export const PopoverAnchor = ({
  children,
  asChild = false,
}: PopoverAnchorProps) => {
  return (
    <RadixPopover.Anchor asChild={asChild}>{children}</RadixPopover.Anchor>
  );
};

export default PopoverAnchor;
