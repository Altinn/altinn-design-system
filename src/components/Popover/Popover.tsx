import React from 'react';
import * as RadixPopover from '@radix-ui/react-popover';
import cn from 'classnames';

import type { PanelProps } from '../Panel/Panel';
import { Panel, PanelVariant } from '../Panel/Panel';

import classes from './PopoverPanel.module.css';

export enum PopoverContentPlacement {
  Top = 'top',
  Right = 'right',
  Bottom = 'bottom',
  Left = 'left',
}

export interface PopoverProps extends PanelProps {
  trigger?: React.ReactNode;
  showArrow?: boolean;
  placement?: PopoverContentPlacement;
}

export const Popover = ({
  children,
  variant = PanelVariant.Info,
  trigger,
  placement = PopoverContentPlacement.Bottom,
  showArrow = true,
  title,
  showIcon,
  forceMobileLayout,
}: PopoverProps) => {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger
        asChild
        data-testid='popover-trigger'
        role='button'
      >
        {trigger}
      </RadixPopover.Trigger>
      <RadixPopover.Content side={placement}>
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
            className={cn(classes['popover-arrow'], [
              classes[`popover-arrow--${variant}`],
            ])}
            data-testid='popover-arrow'
          />
        )}
      </RadixPopover.Content>
    </RadixPopover.Root>
  );
};

export default Popover;
