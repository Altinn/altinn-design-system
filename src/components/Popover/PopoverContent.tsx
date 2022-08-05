import type { Ref } from 'react';
import React, { forwardRef } from 'react';
import cn from 'classnames';
import * as RadixPopover from '@radix-ui/react-popover';

import { usePopoverContext } from './Context';
import classes from './PopoverContent.module.css';
import { PopoverArrow } from './PopoverArrow';

export enum PopoverContentSide {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
}
export interface PopoverContentProps {
  children: React.ReactNode;
  side?: PopoverContentSide;
  showArrow?: boolean;
}

export const PopoverContent = forwardRef(
  (
    {
      children,
      side = PopoverContentSide.Bottom,
      showArrow = true,
    }: PopoverContentProps,
    forwardedRef: Ref<HTMLDivElement>,
  ) => {
    const { popoverVariant } = usePopoverContext();
    return (
      <RadixPopover.Content
        side={side}
        ref={forwardedRef}
      >
        <div
          className={cn(classes['popover-content'], [
            classes[`popover-content--${popoverVariant}`],
          ])}
          data-testid='popover-content'
        >
          {children}
        </div>
        {showArrow && <PopoverArrow />}
      </RadixPopover.Content>
    );
  },
);

PopoverContent.displayName = 'PopoverContent';
