import React, { useContext } from 'react';
import cn from 'classnames';
import { ToggleButtonGroupContext } from '../ToggleButtonGroup/ToggleButtonGroup';

import classes from './ToggleButton.module.css';

export interface ToggleButtonProps {
  children?: React.ReactNode;
  value: string;
}

export const ToggleButton = ({ children, value }: ToggleButtonProps) => {
  const { onChange, selectedValue } = useContext(ToggleButtonGroupContext);

  const handleClick = () => {
    onChange({ selectedValue: value });
    console.log('value', value);
  };

  return(
    <button
      role='radio'
      className={cn(
        classes['toggle-button'],
        value=!selectedValue && classes['toggle-button--not-active'],
        value === selectedValue && classes['toggle-button--active'],
      )}
      onClick={() => handleClick()}
      type='button'
    >
      <span className={cn(
          classes['toggle-button__label'],
          value =! selectedValue && classes['toggle-button--label--not-active'],
          value === selectedValue && classes['toggle-button--label--active'],
        )}
      >
        {children}
      </span>
    </button>
  );
};