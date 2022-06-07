import React from 'react';
import cn from 'classnames';

import { ToggleButtonGroupContext } from './Context';
import type { ChangeProps, ChangeHandler } from './Context';
import classes from './ToggleButtonGroup.module.css';

export interface ToggleButtonGroupProps {
  children?: React.ReactNode;
  onChange: ChangeHandler;
  selectedValue: string;
}

export const ToggleButtonGroup = ({
  children,
  onChange,
  selectedValue,
}: ToggleButtonGroupProps) => {
  const handleChange = ({ selectedValue: val }: ChangeProps) => {
    onChange({ selectedValue: val });
  };

  return (
    <ToggleButtonGroupContext.Provider
      value={{ onChange: handleChange, selectedValue }}
    >
      <div
        className={cn(classes['toggle-button-group'])}
        data-testid='toggle-button-group'
      >
        {children}
      </div>
    </ToggleButtonGroupContext.Provider>
  );
};
