import React, { useEffect, useState } from 'react';
import cn from 'classnames';

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
            {compact ? <CompactCheckmark /> : <NormalCheckmark />}
          </span>
        </span>
      )}
      {label && <span className={classes.label}>{label}</span>}
    </label>
  );
};

const NormalCheckmark = () => (
  <svg
    className={classes.checkmark}
    fill='none'
    height='20'
    viewBox='0 0 20 20'
    width='20'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M11.1952 13.0757L6.07385 7.78723L4.30006 9.6189L9.42143 14.9074L11.1952 13.0757Z'
      fill='white'
    />
    <path
      d='M9.44806 14.9074L16.3 7.83179L14.5261 5.99995L7.67411 13.0755L9.44806 14.9074Z'
      fill='white'
    />
  </svg>
);

const CompactCheckmark = () => (
  <svg
    className={classes.checkmark}
    fill='none'
    height='14'
    viewBox='0 0 14 14'
    width='14'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7.57184 9.40526L4.15479 5.87671L2.99998 7.0692L6.41703 10.5977L7.57184 9.40526Z'
      fill='white'
    />
    <path
      d='M6.53008 10.502L11.6691 5.19531L10.5115 3.99994L5.37248 9.30662L6.53008 10.502Z'
      fill='white'
    />
  </svg>
);
