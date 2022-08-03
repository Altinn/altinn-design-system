import React from 'react';
import userEvent from '@testing-library/user-event';
import { render as renderRtl, screen } from '@testing-library/react';

import type { PopoverProps } from './Popover';
import { PopoverVariant, Popover } from './Popover';
import { PopoverTrigger } from './PopoverTrigger';
import { PopoverContent } from './PopoverContent';

const render = (props: Partial<PopoverProps> = {}) => {
  const allProps = {
    children: (
      <>
        <PopoverTrigger>
          <div role='button'>PopoverTrigger</div>
        </PopoverTrigger>
        <PopoverContent>PopoverContent</PopoverContent>
      </>
    ),
    variant: PopoverVariant.Warning,
  };
  renderRtl(<Popover {...allProps} />);
};

const user = userEvent.setup();

describe('Popover', () => {
  it('should show PopoverContent when PopoverTrigger is clicked', async () => {
    await user.click(screen.getByRole('button', { name: 'PopoverTrigger' }));
    expect(
      screen.getByRole('dialog', { name: 'PopoverContent' }),
    ).toBeInTheDocument();
  });
});
