import React, { useState } from 'react';
import cn from 'classnames';
import { ToggleButton } from '../ToggleButton/ToggleButton';

import classes from './ToggleButtonGroup.module.css';

export interface ToggleButtonGroupProps {
  children: string[];
  callback: any;
}

export const ToggleButtonGroup = ({
  children,
  callback,
}: ToggleButtonGroupProps) => {
  const [toggleIndex, setToggleIndex] = useState(0);
  const handleSetToggleIndex = (index: number) => {
    setToggleIndex(index);
    callback(index);
  };

  return (
    <div className={cn(classes['toggle-button-group__div'])} role='radiogroup'>
      {children.map((label, i) =>
        <ToggleButton
          key={i}
          label={label}
          isActive={i === toggleIndex ? true : false}
          handleClick={() => handleSetToggleIndex(i)}
        ></ToggleButton>
      )}
    </div>
  );
};
