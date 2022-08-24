import React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render as renderRtl, screen } from '@testing-library/react';

import { mockMediaQuery } from '@test/testUtils';

import { PanelVariant } from '../Panel';

import type { PopoverPanelProps } from './PopoverPanel';
import { PopoverPanel } from './PopoverPanel';

const render = (props: Partial<PopoverPanelProps> = {}) => {
  const allProps = {
    children: <div>Popover text</div>,
    trigger: <button>Open</button>,
    variant: PanelVariant.Warning,
    showArrow: true,
    ...props,
  };
  renderRtl(<PopoverPanel {...allProps} />);
};

const user = userEvent.setup();

const mediaQueryBreakPoint = 500;
const { setScreenWidth } = mockMediaQuery(mediaQueryBreakPoint);

describe('Panel', () => {
  beforeEach(() => {
    setScreenWidth(mediaQueryBreakPoint + 100);
  });

  it('should have aria-expanded = true when popover trigger is clicked by mouse', async () => {
    render();

    const popoverTrigger = screen.getByRole('button', { name: 'Open' });
    await act(async () => {
      await user.click(popoverTrigger);
    });

    expect(
      screen.getByRole('button', { name: 'Open', expanded: true }),
    ).toBeInTheDocument();
  });

  it('should have aria-expanded = true when popover trigger is clicked by Space', async () => {
    render();

    const popoverTrigger = screen.getByRole('button', { name: 'Open' });

    await user.keyboard('{Tab}');
    await act(async () => {
      user.type(popoverTrigger, '{Space}');
    });

    expect(
      screen.getByRole('button', { name: 'Open', expanded: false }),
    ).toBeInTheDocument();
  });

  it('should have aria-expanded = true when popover trigger is clicked by Enter', async () => {
    render();

    await user.keyboard('{Tab}');
    await act(async () => {
      await user.keyboard('{Enter}');
    });

    expect(
      screen.getByRole('button', { name: 'Open', expanded: true }),
    ).toBeInTheDocument();
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
});
