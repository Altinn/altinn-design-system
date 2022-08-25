import React from 'react';
import * as RadixPopover from '@radix-ui/react-popover';
import cn from 'classnames';

import type { PanelProps, RenderArrowProps } from '../Panel/Panel';
import { Panel, PanelVariant } from '../Panel/Panel';

import classes from './PopoverPanel.module.css';

export enum PopoverSide {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
}

export interface PopoverPanelProps
  extends PanelProps,
    Pick<RadixPopover.PopoverProps, 'open' | 'onOpenChange'> {
  children: React.ReactNode;
  trigger: React.ReactNode;
  side?: PopoverSide;
}

const renderArrow = ({ children }: RenderArrowProps) => {
  return (
    <RadixPopover.Arrow
      className={cn(classes['popover-panel__arrow'])}
      asChild
    >
      {children}
    </RadixPopover.Arrow>
  );
};

export const PopoverPanel = ({
  children,
  variant = PanelVariant.Warning,
  trigger,
  side = PopoverSide.Top,
  title,
  showIcon,
  forceMobileLayout,
  showPointer = true,
  onOpenChange,
  open,
}: PopoverPanelProps) => {
  return (
    <RadixPopover.Root
      open={open}
      onOpenChange={onOpenChange}
    >
      <RadixPopover.Trigger
        asChild
        role='button'
      >
        {trigger}
      </RadixPopover.Trigger>
      <RadixPopover.Content
        side={side}
        className={classes['popover-panel']}
      >
        <Panel
          title={title}
          showIcon={showIcon}
          forceMobileLayout={forceMobileLayout}
          showPointer={showPointer}
          variant={variant}
          renderArrow={renderArrow}
        >
          {children}
        </Panel>
      </RadixPopover.Content>
    </RadixPopover.Root>
  );
};

export default PopoverPanel;
