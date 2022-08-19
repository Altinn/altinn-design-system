import React from 'react';
import * as RadixPopover from '@radix-ui/react-popover';
import cn from 'classnames';

import type { PanelProps } from '../Panel/Panel';
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
  showArrow?: boolean;
  placement?: PopoverPlacement;
}

export const PopoverPanel = ({
  children,
  variant = PanelVariant.Info,
  trigger,
  placement = PopoverPlacement.Bottom,
  showArrow = true,
  title,
  showIcon,
  forceMobileLayout,
}: PopoverPanelProps) => {
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
          showAsPopover={true}
          variant={variant}
        >
          {children}
        </Panel>
        {showArrow && (
          <RadixPopover.Arrow
            className={cn(classes['popover-panel__arrow'], [
              classes[`popover-panel__arrow--${variant}`],
            ])}
            data-testid='popover-arrow'
          />
        )}
      </RadixPopover.Content>
    </RadixPopover.Root>
  );
};

export default PopoverPanel;
