import React, { useContext } from 'react';
import cn from 'classnames';

import { ToggleButtonGroupContext } from './ToggleButtonGroup';
import classes from './ToggleButton.module.css';

export interface ToggleButtonProps {
  children?: React.ReactNode;
  value: string;
}

export const ToggleButton = ({ children, value }: ToggleButtonProps) => {
  const { onChange, selectedValue } = useContext(ToggleButtonGroupContext);

  const handleClick = () => {
    onChange({ selectedValue: value });
  };

  return (
    <button
      data-testid='toggle-button'
      role='radio'
      className={cn(classes['toggle-button'], {
        [classes['toggle-button--selected']]: value === selectedValue,
      })}
      onClick={handleClick}
      type='button'
      aria-checked={value == selectedValue}
    >
      <span
        data-testid='toggle-button-span'
        className={cn(classes['toggle-button__label'], {
          [classes['toggle-button__label--selected']]: value === selectedValue,
        })}
      >
        {children}
      </span>
    </button>
  );
};
