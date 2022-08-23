import React from 'react';
import * as RadixPopover from '@radix-ui/react-popover';
import cn from 'classnames';

import type { PanelProps, RenderArrowProps } from '../Panel/Panel';
import { Panel, PanelVariant } from '../Panel/Panel';

import classes from './PopoverPanel.module.css';

export enum PopoverPlacement {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
}

export interface PopoverPanelProps extends PanelProps {
  trigger?: React.ReactNode;
  placement?: PopoverPlacement;
}

export const PopoverPanel = ({
  children,
  variant = PanelVariant.Warning,
  trigger,
  placement = PopoverPlacement.Top,
  title,
  showIcon,
  forceMobileLayout,
  showPointer,
}: PopoverPanelProps) => {
  const renderArrow = ({ children }: RenderArrowProps) => {
    return (
      <RadixPopover.Arrow
        className={cn(classes['popover-panel__arrow'])}
        data-testid='popover-arrow'
        asChild
      >
        {children}
      </RadixPopover.Arrow>
    );
  };
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger
        asChild
        data-testid='popover-trigger'
        role='button'
      >
        {trigger}
      </RadixPopover.Trigger>
      <RadixPopover.Content
        side={placement}
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
