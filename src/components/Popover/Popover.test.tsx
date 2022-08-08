import React from 'react';
import userEvent from '@testing-library/user-event';
import { render as renderRtl, screen } from '@testing-library/react';

import type { PopoverProps } from './Popover';
import { Popover } from './Popover';
import { PopoverTrigger } from './PopoverTrigger';
import { PopoverContent } from './PopoverContent';
import { PopoverVariant } from './Context';

const render = (props: Partial<PopoverProps> = {}) => {
  const allProps = {
    children: (
      <>
        <PopoverTrigger>
          <div>trigger</div>
        </PopoverTrigger>
        <PopoverContent>PopoverContent</PopoverContent>
      </>
    ),
    variant: PopoverVariant.Warning,
    ...props,
  };
  renderRtl(<Popover {...allProps} />);
};

const user = userEvent.setup();

describe('Popover', () => {
  it('should have classname ', async () => {
    /*await user.click(screen.getByRole('button', { name: 'PopoverTrigger' }));
    expect(
      screen.getByRole('dialog', { name: 'PopoverContent' }),
    ).toBeInTheDocument();*/
    render();
    await user.click(
      screen.getByRole('button', {
        name: /trigger/i,
      }),
    );
    //await screen.debug();
  });

  /*Object.values(PopoverVariant).forEach((variant) => {
    it(`should render popover with correct classname when variant is ${variant}`, async () => {
      render();
      const otherVariants = Object.values(PopoverVariant).filter(
        (v) => v !== variant,
      );
      //await user.click(screen.getByTestId('popover-trigger'));
      screen.debug();
      /*await user.click(screen.getByTestId('popover-trigger'));
      const popoverArrow = screen.getByTestId('popover-arrow');
      //const popoverContent = screen.getByTestId('popover-content');
      expect(popoverArrow.classList.contains(`popover-arrow--${variant}`)).toBe(
        true,
      );
      otherVariants.forEach((v) => {
        expect(popoverArrow.classList.contains(`popover-arrow--${v}`)).toBe(
          false,
        );
      });*/

  /*expect(
        popoverContent.classList.contains(`popover-content--${variant}`),
      ).toBe(true);
      otherVariants.forEach((v) => {
        expect(popoverContent.classList.contains(`popover-content--${v}`)).toBe(
          false,
        );
      });
    });
  });*/
});
