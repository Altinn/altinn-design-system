import type { ChangeEventHandler } from 'react';
import React, { useId } from 'react';
import cn from 'classnames';

import classes from './Checkbox.module.css';

export interface CheckboxProps {
  checkboxId?: string;
  checked?: boolean;
  compact?: boolean;
  description?: string;
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
  description,
  disabled,
  error,
  label,
  name,
  onChange,
  readOnly,
}: CheckboxProps) => {
  const randomId = useId();
  const inputId = checkboxId || 'checkbox-' + randomId;
  const labelId = label ? `${inputId}-label` : undefined;
  const descriptionId = description ? `${inputId}-description` : undefined;

  return (
    <label
      className={cn(
        classes.wrapper,
        checked && classes['wrapper--checked'],
        error && classes['wrapper--error'],
        disabled && classes['wrapper--disabled'],
        compact && classes['wrapper--compact'],
        readOnly && classes['wrapper--read-only'],
      )}
      htmlFor={inputId}
    >
      {!readOnly && (
        <span className={classes['checkbox-wrapper']}>
          <input
            aria-describedby={descriptionId}
            aria-labelledby={labelId}
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
      {(label || description) && (
        <span className={classes['label-and-description']}>
          {label && (
            <span
              className={classes.label}
              id={`${inputId}-label`}
            >
              {label}
            </span>
          )}
          {description && (
            <span
              className={classes.description}
              id={`${inputId}-description`}
            >
              {description}
            </span>
          )}
        </span>
      )}
    </label>
  );
};
