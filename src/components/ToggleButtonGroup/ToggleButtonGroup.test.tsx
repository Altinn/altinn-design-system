import React, { useState } from 'react';

import { ChangeProps, ToggleButtonGroup } from './ToggleButtonGroup';
import { ToggleButton } from './ToggleButton';

const [selected, setSelected] = useState('left');

const handleChange = ({ selectedValue }: ChangeProps) => {
  setSelected(selectedValue);
};

interface ToggleButtonGroupComponentProps {
  handleOnChange: ({ selectedValue }: ChangeProps) => string;
  selectedValue: string;
}

interface ChangeProps {
  selectedValue: string;
}

const ToggleButtonGroupComponent = ({
  handleOnChange,
  selectedValue,
}: ToggleButtonGroupComponentProps) => (
  <ToggleButtonGroup onChange={handleOnChange} selectedValue={selectedValue}>
    <ToggleButton value='left' />
    <ToggleButton value='right' />
  </ToggleButtonGroup>
)

describe('ToggleButtonGroup', () => {
  it('calls onChange when clicked', () => {
    <ToggleButtonGroupComponent
      handleOnChange={handleChange}
      selected={selected}
    ></ToggleButtonGroupComponent>;
  });

  it('Button has aria pressed state after being clicked', () => {
    // Please add some non-snapshot test to verify conditional statements
    expect(<ToggleButton />).toBe(true);
  });

  it('Right button not pressed when left is pressed', () => {
    // Please add some non-snapshot test to verify conditional statements
    expect(<ToggleButtonGroup />).toBe(true);
  });
});
