import type { ChangeEventHandler } from 'react';
import React from 'react';
import cn from 'classnames';

import {
  CheckboxRadioTemplate,
  CheckboxRadioTemplateSize,
} from '@/components/_CheckboxRadioTemplate/CheckboxRadioTemplate';

import classes from './Checkbox.module.css';

export interface CheckboxProps {
  checkboxId?: string;
  checked?: boolean;
  compact?: boolean;
  description?: string;
  disabled?: boolean;
  error?: boolean;
  hideLabel?: boolean;
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
  hideLabel,
  label,
  name,
  onChange,
  readOnly,
}: CheckboxProps) => (
  <CheckboxRadioTemplate
    checked={checked}
    className={cn(
      classes.checkbox,
      checked && classes['checkbox--checked'],
      error && classes['checkbox--error'],
      disabled && classes['checkbox--disabled'],
      compact && classes['checkbox--compact'],
      readOnly && classes['checkbox--read-only'],
    )}
    description={description}
    disabled={disabled}
    hideInput={readOnly}
    hideLabel={hideLabel}
    inputId={checkboxId}
    label={label}
    name={name}
    onChange={onChange}
    size={
      compact
        ? CheckboxRadioTemplateSize.Xsmall
        : CheckboxRadioTemplateSize.Small
    }
    type='checkbox'
  >
    <span className={classes['visible-box']}>
      <span className={classes['visible-box__checkmark']} />
    </span>
  </CheckboxRadioTemplate>
);
