import React from 'react';
import { render as renderRtl, screen, fireEvent, getByText } from '@testing-library/react';

import { ToggleButtonGroup } from './ToggleButtonGroup';
import type { ToggleButtonGroupProps } from './ToggleButtonGroup';
import { ToggleButton } from './ToggleButton';

const ToggleButtonGroupComponent = ({ handleOnClick }: any) => {
  return (
    <ToggleButtonGroup onChange={handleOnClick} selectedValue='left'>
      <ToggleButton value='left'>Left</ToggleButton>
      <ToggleButton value='right'>Right</ToggleButton>
    </ToggleButtonGroup>
  );
};

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

describe('ToggleButtonGroup', () => {
  it('Button calls handleChange 1 time and selectedValue is left', () => {
    const handleChange = jest.fn();
    render({ onChange: handleChange });
    fireEvent.click(screen.getByRole('button', { name: 'Left' }));
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith({ selectedValue: 'left' });

    fireEvent.click(screen.getByRole('button', { name: 'Right' }));
    expect(handleChange).toHaveBeenCalledTimes(2);
    expect(handleChange).toHaveBeenCalledWith({ selectedValue: 'right' });
  });

  it('should have left aria label pressed when selectedValue left is pressed', () => {
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
    fireEvent.keyDown(screen.getByTestId('toggle-button-group'), {
      key: 'Tab',
      code: 'Tab',
      charCode: 9,
    });
    fireEvent.keyDown(screen.getByTestId('toggle-button-group'), {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    });
    expect(
      screen.getByRole('button', { name: 'Left', pressed: true }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Right', pressed: false }),
    ).toBeInTheDocument();
  });

  it('should have aria label of left button pressed when left button is clicked by space', () => {
    render({ selectedValue: 'left' });
    fireEvent.keyDown(screen.getByTestId('toggle-button-group'), {
      key: 'Tab',
      code: 'Tab',
      charCode: 9,
    });
    fireEvent.keyDown(screen.getByRole('button', { name: 'Left' }), {
      key: 'Space',
      code: 'Space',
      charCode: 32,
    });
    expect(
      screen.getByRole('button', { name: 'Left', pressed: true }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Right', pressed: false }),
    ).toBeInTheDocument();
  });
});
