import type { ChangeEventHandler } from 'react';
import React, { useId, useState } from 'react';
import cn from 'classnames';

import classes from './Checkbox.module.css';

export interface CheckboxProps {
  checkboxId?: string;
  checked?: boolean;
  compact?: boolean;
  disabled?: boolean;
  error?: boolean;
  label?: string;
  name?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  readOnly?: boolean;
}

export const Checkbox = ({
  checkboxId,
  checked,
  compact,
  disabled,
  error,
  label,
  name,
  onChange,
  readOnly,
}: CheckboxProps) => {
  const randomId = useId();
  const inputId = checkboxId || 'checkbox-' + randomId;
  const [usingTab, setUsingTab] = useState<boolean>(false);

  document.body.addEventListener('mousedown', () => setUsingTab(false));

  document.body.addEventListener(
    'keydown',
    (event) => event.key === 'Tab' && setUsingTab(true),
  );

  return (
    <label
      className={cn(
        classes.wrapper,
        checked && classes['wrapper--checked'],
        error && classes['wrapper--error'],
        disabled && classes['wrapper--disabled'],
        compact && classes['wrapper--compact'],
        readOnly && classes['wrapper--read-only'],
        usingTab && classes['wrapper--using-tab'],
      )}
      htmlFor={inputId}
    >
      {!readOnly && (
        <span className={classes['checkbox-wrapper']}>
          <input
            checked={checked ?? false}
            className={classes.checkbox}
            disabled={disabled}
            id={inputId}
            name={name}
            onChange={disabled ? undefined : onChange}
            type='checkbox'
          />
          <span className={classes['visible-box']}>
            <span className={classes['visible-box__checkmark']} />
          </span>
        </span>
      )}
      {label && <span className={classes.label}>{label}</span>}
    </label>
  );
};
