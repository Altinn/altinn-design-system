import React from 'react';
import { render as renderRtl, screen, fireEvent } from '@testing-library/react';
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

  it('should have aria-pressed=true on left button when selectedValue is left', () => {
    render({ selectedValue: 'left' });
    expect(
      screen.getByRole('button', { name: 'Left', pressed: true }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Right', pressed: false }),
    ).toBeInTheDocument();
  });

  it('should have aria label of right button pressed when selectedValue is right', () => {
    render({ selectedValue: 'right' });
    expect(
      screen.getByRole('button', { name: 'Right', pressed: true }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Left', pressed: false }),
    ).toBeInTheDocument();
  });

  it('should have aria label of left button pressed when left button is clicked by enter', () => {
    render({ selectedValue: 'left' });
    userEvent.keyboard('{Tab}');
    userEvent.keyboard('{Enter}');
    expect(
      screen.getByRole('button', { name: 'Left', pressed: true }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Right', pressed: false }),
    ).toBeInTheDocument();
  });

  it('should have aria label of left button pressed when left button is clicked by space', () => {
    render({ selectedValue: 'left' });
    userEvent.keyboard('{Tab}');
    userEvent.keyboard('{Enter}');
    expect(
      screen.getByRole('button', { name: 'Left', pressed: true }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Right', pressed: false }),
    ).toBeInTheDocument();
  });
});
