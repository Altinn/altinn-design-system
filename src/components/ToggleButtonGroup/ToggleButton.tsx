import React from 'react';
import cn from 'classnames';

import { useToggleButtonContext } from './Context';
import classes from './ToggleButton.module.css';

export interface ToggleButtonProps {
  children?: React.ReactNode;
  value: string;
}

export const ToggleButton = ({ children, value }: ToggleButtonProps) => {
  const { onChange, selectedValue } = useToggleButtonContext();

  const handleClick = () => {
    onChange({ selectedValue: value });
  };

  return (
    <button
      data-testid='toggle-button'
      className={cn(classes['toggle-button'], {
        [classes['toggle-button--selected']]: value === selectedValue,
      })}
      onClick={handleClick}
      type='button'
      aria-pressed={value == selectedValue}
    >
      {children}
    </button>
  );
};
