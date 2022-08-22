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
  Object.values(PanelVariant).forEach((variant) => {
    it(`should render popover arrow with correct classname when variant is ${variant}`, async () => {
      render({ variant });
      const otherVariants = Object.values(PanelVariant).filter(
        (v) => v !== variant,
      );
      const popoverTrigger = screen.getByRole('button', { name: 'Open' });
      await act(async () => {
        await user.click(popoverTrigger);
      });
      const popoverArrow = screen.getByTestId('popover-arrow');

      expect(
        popoverArrow.classList.contains(`popover-panel__arrow--${variant}`),
      ).toBe(true);
      otherVariants.forEach((v) => {
        expect(
          popoverArrow.classList.contains(`popover-panel__arrow--${v}`),
        ).toBe(false);
      });
    });
  });

  it('should show arrow when "showArrow" is set to true', async () => {
    render({ showArrow: true });

    const popoverTrigger = screen.getByRole('button', { name: 'Open' });
    await act(async () => {
      await user.click(popoverTrigger);
    });

    expect(screen.getByTestId('popover-arrow')).toBeInTheDocument();
  });

  it('should not show arrow when "showArrow" is set to false', async () => {
    render({ showArrow: false });

    const popoverTrigger = screen.getByRole('button', { name: 'Open' });
    await act(async () => {
      await user.click(popoverTrigger);
    });

    expect(screen.queryByTestId('popover-arrow')).not.toBeInTheDocument();
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

  it('should have aria-expanded = false when popover trigger when escape is clicked', async () => {
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
