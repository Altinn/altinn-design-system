import React from 'react';
import userEvent from '@testing-library/user-event';
import { render as renderRtl, screen } from '@testing-library/react';

import type { PopoverProps } from './Popover';
import { Popover } from './Popover';
import { PopoverTrigger } from './PopoverTrigger';
import { PopoverContent } from './PopoverContent';
import { PopoverVariant } from './Context';

/*
class ResizeObserver {
  cb: any;

  constructor(cb: any) {
    this.cb = cb;
  }
  observe(cb: any) {
    this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }]);
  }
  unobserve() {}
  disconnect() {}
}


// @ts-ignore
global.ResizeObserver = ResizeObserver;

global.DOMRect = {
  // @ts-ignore
  fromRect: () => ({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: 0,
    height: 0,
  }),
};
*/
const render = (props: Partial<PopoverProps> = {}) => {
  const allProps = {
    children: (
      <>
        <PopoverTrigger>
          <div>Trigger</div>
        </PopoverTrigger>
        <PopoverContent>PopoverContent</PopoverContent>
      </>
    ),
    variant: PopoverVariant.Neutral,
    ...props,
  };
  renderRtl(<Popover {...allProps} />);
};

const user = userEvent.setup();

Object.values(PopoverVariant).forEach((variant) => {
  it(`should render popover arrow and popover content with correct classname when variant is ${variant}`, async () => {
    render({ variant: variant });
    const otherVariants = Object.values(PopoverVariant).filter(
      (v) => v !== variant,
    );
    const popoverTrigger = screen.getByRole('button', { name: 'Trigger' });
    user.click(popoverTrigger);
    const popoverContent = screen.getByTestId('popover-content');
    const popoverArrow = screen.getByTestId('popover-arrow');
    expect(popoverArrow.classList.contains(`popover-arrow--${variant}`)).toBe(
      true,
    );
    otherVariants.forEach((v) => {
      expect(popoverArrow.classList.contains(`popover-arrow--${v}`)).toBe(
        false,
      );
    });

    expect(
      popoverContent.classList.contains(`popover-content--${variant}`),
    ).toBe(true);
    otherVariants.forEach((v) => {
      expect(popoverContent.classList.contains(`popover-content--${v}`)).toBe(
        false,
      );
    });
  });
});
