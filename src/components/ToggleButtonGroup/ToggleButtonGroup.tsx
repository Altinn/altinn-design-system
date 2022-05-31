import React, { createContext } from 'react';
import cn from 'classnames';

import classes from './ToggleButtonGroup.module.css';

const ToggleButtonGroupContext = createContext('left');

export interface ToggleButtonGroupProps {
  children?: any;
}

export const ToggleButtonGroup = ({ children }: ToggleButtonGroupProps) => {
  return (
    <div className={cn(classes['toggle-button-group__div'])} role='radiogroup'>
      {children}
    </div>
  );
};
