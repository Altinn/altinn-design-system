import React, { createContext } from 'react';
import cn from 'classnames';

import classes from './ToggleButtonGroup.module.css';

export const ToggleButtonGroupContext = createContext({
  selectedValue: '',
  onChange: ({ selectedValue }: ChangeProps) => {
    return selectedValue;
  },
});

export interface ToggleButtonGroupProps {
  children?: React.ReactNode;
  onChange: ({ selectedValue }: ChangeProps) => string;
  selectedValue: string;
}

export interface ChangeProps {
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
      <div className={cn(classes['toggle-button-group'])} role='radiogroup'>
        {children}
      </div>
    </ToggleButtonGroupContext.Provider>
  );
};
