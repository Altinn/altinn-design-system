import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import { ReactComponent as CheckmarkNormal } from './CheckmarkNormal.svg';
import { ReactComponent as CheckmarkCompact } from './CheckmarkCompact.svg';
import classes from './Checkbox.module.css';

export interface CheckboxProps {
  checkboxId?: string;
  checked?: boolean;
  className?: string;
  compact?: boolean;
  disabled?: boolean;
  error?: boolean;
  label?: string;
  name?: string;
  readOnly?: boolean;
}

export const Checkbox = ({
  checkboxId,
  checked,
  className,
  compact,
  disabled,
  error,
  label,
  name,
  readOnly,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(!!checked);

  useEffect(() => setIsChecked(!!checked), [checked]);

  const inputId =
    checkboxId ||
    'checkbox-' + window.crypto.getRandomValues(new Uint32Array(1));

  return (
    <label
      className={cn(
        classes.wrapper,
        isChecked && classes.checked,
        error && classes.error,
        disabled && classes.disabled,
        compact && classes.compact,
        readOnly && classes.readOnly,
        className,
      )}
      htmlFor={inputId}
    >
      {!readOnly && (
        <span className={classes.checkboxWrapper}>
          <input
            checked={isChecked}
            className={classes.checkbox}
            disabled={disabled}
            id={inputId}
            name={name}
            onChange={(event) => {
              !disabled && setIsChecked(event.target.checked);
            }}
            type='checkbox'
          />
          <span className={classes.visibleBox}>
            <span className={classes.checkmark}>
              {compact ? <CheckmarkCompact /> : <CheckmarkNormal />}
            </span>
          </span>
        </span>
      )}
      {label && <span className={classes.label}>{label}</span>}
    </label>
  );
};
