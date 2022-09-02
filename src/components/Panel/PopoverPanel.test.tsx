import React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render as renderRtl, screen } from '@testing-library/react';

import { PanelVariant } from '../Panel';

import type { PopoverPanelProps } from './PopoverPanel';
import { PopoverPanel } from './PopoverPanel';

const render = (props: Partial<PopoverPanelProps> = {}) => {
  const allProps = {
    children: <div data-testid='popover-content'>Popover text</div>,
    trigger: <button>Open</button>,
    variant: PanelVariant.Warning,
    open: false,
    onOpenChange: jest.fn(),
    ...props,
  };
  renderRtl(<PopoverPanel {...allProps} />);
};

const user = userEvent.setup();

describe('Panel', () => {
  it('should call onOpenChange when popover trigger is clicked', async () => {
    const onOpenChange = jest.fn();
    render({ onOpenChange });
    const popoverTrigger = screen.getByRole('button', { name: 'Open' });

    await user.click(popoverTrigger);
    expect(onOpenChange).toHaveBeenCalledWith(true);
    expect(onOpenChange).toHaveBeenCalledTimes(1);

    await act(async () => {
      await user.type(popoverTrigger, '{Space}');
    });
    expect(onOpenChange).toHaveBeenCalledWith(true);
    expect(onOpenChange).toHaveBeenCalledTimes(2);
  });

  it('should show popover content when isOpen=true', async () => {
    render({ open: true });

    expect(screen.getByTestId('popover-content')).toBeInTheDocument();
  });

  it('should not show popover content when isOpen=false', async () => {
    render({ open: false });

    expect(screen.queryByTestId('popover-content')).not.toBeInTheDocument();
  });
});
