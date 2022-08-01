import type { Ref } from 'react';
import React, { forwardRef } from 'react';
import cn from 'classnames';
import * as RadixPopover from '@radix-ui/react-popover';

import { usePopoverContext } from './Context';
import classes from './PopoverContent.module.css';

export enum PopoverContentSide {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
}
export interface PopoverContentProps {
  children: React.ReactNode;
  side: PopoverContentSide;
}

export const PopoverContent = forwardRef(
  (
    { children, ...props }: PopoverContentProps,
    forwardedRef: Ref<HTMLDivElement>,
  ) => {
    const { popoverVariant } = usePopoverContext();
    return (
      <RadixPopover.Content
        {...props}
        ref={forwardedRef}
      >
        <div
          className={cn(classes['popover-content'], [
            classes[`popover-content--${popoverVariant}`],
          ])}
        >
          {children}
        </div>
      </RadixPopover.Content>
    );
  },
);

PopoverContent.displayName = 'PopoverContent';
