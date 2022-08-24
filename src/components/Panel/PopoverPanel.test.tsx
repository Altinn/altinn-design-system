import { debug } from 'console';

import React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render as renderRtl, screen } from '@testing-library/react';

import { PanelVariant } from '../Panel';

import type { PopoverPanelProps } from './PopoverPanel';
import { PopoverPanel } from './PopoverPanel';

const render = (props: Partial<PopoverPanelProps> = {}) => {
  const allProps = {
    children: <div>Popover text</div>,
    trigger: <button>Open</button>,
    variant: PanelVariant.Warning,
    showArrow: true,
    expand: false,
    onExpandChange: jest.fn(),
    ...props,
  };
  renderRtl(<PopoverPanel {...allProps} />);
};

const user = userEvent.setup();

describe('Panel', () => {
  it('should call onExpandChange when popover trigger is clicked by Space', async () => {
    const onExpandChange = jest.fn();
    render({ onExpandChange, expand: false });

    const popoverTrigger = screen.getByRole('button', { name: 'Open' });

    await act(async () => {
      await user.keyboard('{Tab}');
    });
    await act(async () => {
      user.type(popoverTrigger, '{Space}');
    });

    expect(onExpandChange).toHaveBeenCalledWith(true);
    expect(
      screen.getByRole('button', { name: 'Open', expanded: false }),
    ).toBeInTheDocument();
  });

  it('should call onExpandChange when popover trigger is clicked by Enter', async () => {
    const onExpandChange = jest.fn();
    render({ onExpandChange });

    await act(async () => {
      await user.keyboard('{Tab}');
    });
    await act(async () => {
      await user.keyboard('{Enter}');
    });

    expect(onExpandChange).toHaveBeenCalledWith(true);
  });

  it('should have aria-expanded = false when escape is pressed', async () => {
    render();

    await user.keyboard('{Tab}');
    await act(async () => {
      await user.keyboard('{Enter}');
    });
    await act(async () => {
      await user.keyboard('{Escape}');
    });
    expect(
      screen.getByRole('button', { name: 'Open', expanded: false }),
    ).toBeInTheDocument();
  });

  it('should call onExpandChange with correct expand=true when trigger is clicked by mouse', async () => {
    const onExpandChange = jest.fn();
    render({ onExpandChange });

    const popoverTrigger = screen.getByRole('button', { name: 'Open' });
    await act(async () => {
      await user.click(popoverTrigger);
    });

    expect(onExpandChange).toHaveBeenCalledWith(true);
  });

  it('should have aria-expanded = true when expand is true', async () => {
    render({ expand: true });

    expect(
      screen.getByRole('button', { name: 'Open', expanded: true }),
    ).toBeInTheDocument();
  });
});
