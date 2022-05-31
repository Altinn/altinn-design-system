import React, {useContext} from 'react';
import cn from 'classnames';

import classes from './ToggleButton.module.css';

export interface ToggleButtonProps {
  label: string;
  isActive: boolean;
  handleClick: any;
}

export const ToggleButton = ({
  label: label,
  isActive: isActive,
  handleClick: handleClick,
}: ToggleButtonProps) => {
  const { onChange, selectedValue } = useContext(ToggleButtonGroupContext);

  return(
    <button
      role='radio'
      className={cn(
        classes['toggle-button'],
        !isActive && classes['toggle-button--not-active'],
        isActive && classes['toggle-button--active'],
      )}
      onClick={() => handleClick()}
      type='button'
    >
      <span className={cn(
          classes['toggle-button__label'],
          !isActive && classes['toggle-button--label--not-active'],
          isActive && classes['toggle-button--label--active'],
        )}
      >
        {label}
      </span>
    </button>
}

