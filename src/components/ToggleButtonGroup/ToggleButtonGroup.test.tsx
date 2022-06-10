import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ToggleButtonGroup } from './ToggleButtonGroup';
import type { ToggleButtonGroupProps } from './ToggleButtonGroup';
import { ToggleButton } from './ToggleButton';

const render = (props: Partial<ToggleButtonGroupProps> = {}) => {
  const allProps = {
    children: (
      <>
        <ToggleButton value='left'>Left</ToggleButton>
        <ToggleButton value='right'>Right</ToggleButton>
      </>
    ),
    onChange: jest.fn(),
    selectedValue: 'left',
    ...props,
  };
  renderRtl(<ToggleButtonGroup {...allProps} />);
};

const user = userEvent.setup();

describe('ToggleButtonGroup', () => {
  it('should call handleChange with correct selectedValue when ToggleButton is clicked', async () => {
    const handleChange = jest.fn();
    render({ onChange: handleChange });

    await user.click(screen.getByRole('button', { name: 'Left' }));
    expect(handleChange).toHaveBeenCalledWith({ selectedValue: 'left' });

    await user.click(screen.getByRole('button', { name: 'Right' }));
    expect(handleChange).toHaveBeenCalledWith({ selectedValue: 'right' });
  });

  it('should call handleChange with correct selectedValue when left button is clicked by enter', async () => {
    const handleChange = jest.fn();
    render({ onChange: handleChange });

    await user.keyboard('{Tab}');
    await user.keyboard('{Enter}');
    expect(handleChange).toHaveBeenCalledWith({ selectedValue: 'left' });
  });

  it('should call handleChange with correct selectedValue when right button is clicked by space', async () => {
    const handleChange = jest.fn();
    render({ onChange: handleChange });

    const toggleButton = screen.getByRole('button', {
      name: 'Right',
    });
    await user.type(toggleButton, '{Space}');
    expect(handleChange).toHaveBeenCalledWith({ selectedValue: 'right' });
  });

  it('should have aria-pressed=true on left button when selectedValue is left', () => {
    render({ selectedValue: 'left' });

    expect(
      screen.getByRole('button', { name: 'Left', pressed: true }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Right', pressed: false }),
    ).toBeInTheDocument();
  });

  it('should have aria-pressed=true on right button when selectedValue is right', () => {
    render({ selectedValue: 'right' });

    expect(
      screen.getByRole('button', { name: 'Right', pressed: true }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Left', pressed: false }),
    ).toBeInTheDocument();
  });
});
