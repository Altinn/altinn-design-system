import React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render as renderRtl, screen } from '@testing-library/react';

import { PanelVariant } from '../Panel';

import type { PopoverPanelProps } from './PopoverPanel';
import { PopoverPanel } from './PopoverPanel';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

const render = (props: Partial<PopoverPanelProps> = {}) => {
  const allProps = {
    children: <div>Popover text</div>,
    trigger: <button>Open</button>,
    variant: PanelVariant.Warning,
    ...props,
  };
  renderRtl(<PopoverPanel {...allProps} />);
};

const user = userEvent.setup();

Object.values(PanelVariant).forEach((variant) => {
  it(`should render popover arrow and popover content with correct classname when variant is ${variant}`, async () => {
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
