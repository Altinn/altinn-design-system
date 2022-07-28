import React from 'react';
import cn from 'classnames';
import * as RadixPopover from '@radix-ui/react-popover';

import classes from './PopoverContent.module.css';
import { PopoverArrow } from './PopoverArrow';

export enum Placement {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
}

export enum AnchorAlign {
  Start = 'start',
  Center = 'center',
  End = 'end',
}

export interface PopoverContentProps {
  children?: React.ReactNode;
  showArrow?: boolean;
  placement?: Placement;
  sideOffset?: number;
  anchorAlign?: AnchorAlign;
  arrowPadding?: number;
}

export const PopoverContent = ({
  children,
  showArrow = true,
  placement = Placement.Bottom,
  sideOffset = 0,
  anchorAlign = AnchorAlign.Center,
  arrowPadding = 0,
}: PopoverContentProps) => {
  return (
    <RadixPopover.Content
      side={placement}
      sideOffset={sideOffset}
      align={anchorAlign}
      arrowPadding={arrowPadding}
    >
      {children}
      {showArrow && <PopoverArrow></PopoverArrow>}
    </RadixPopover.Content>
  );
};

export default PopoverContent;
