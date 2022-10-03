import React, { useId } from 'react';
import cn from 'classnames';

import type { ChangeHandler } from '../ToggleButtonGroup/Context';

import classes from './TableRadioButton.module.css';

export interface RadioButtonProps {
  value?: string;
  onChange: ChangeHandler;
  selectedValue: string;
}

export const TableRadioButton = ({
  value = '',
  onChange,
}: RadioButtonProps) => {
  const radioButtonId = useId();
  const handleClick = () => {
    onChange({ selectedValue: value });
  };
  return (
    <label className={cn(classes['container'])}>
      <input
        className={cn(classes['input-radio-button'])}
        type='radio'
        id={radioButtonId}
        name='radiobutton'
        value={value}
        onChange={handleClick}
      ></input>
      <span className={cn(classes['checkmark'])}></span>
    </label>
  );
};

export default TableRadioButton;
