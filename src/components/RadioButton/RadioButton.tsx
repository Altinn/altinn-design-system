import type { ChangeEventHandler, ReactNode } from 'react';
import React from 'react';
import cn from 'classnames';

import {
  CheckboxRadioTemplate,
  CheckboxRadioTemplateSize,
} from '@/components/_CheckboxRadioTemplate/CheckboxRadioTemplate';

import classes from './RadioButton.module.css';

export enum RadioButtonSize {
  Xsmall = 'xsmall',
  Small = 'small',
}

export interface RadioButtonProps {
  checked?: boolean;
  className?: string;
  description?: ReactNode;
  disabled?: boolean;
  error?: boolean;
  hideLabel?: boolean;
  label?: ReactNode;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  presentation?: boolean;
  radioId?: string;
  size?: RadioButtonSize;
  value: string;
}

/*
 * @deprecated Use RadioButton from @digdir/design-system-react instead.
 */
export const RadioButton = ({
  checked,
  description,
  disabled,
  error,
  hideLabel,
  label,
  name,
  onChange,
  presentation,
  radioId,
  size = RadioButtonSize.Small,
  value,
}: RadioButtonProps) => (
  <CheckboxRadioTemplate
    checked={checked}
    className={cn(
      classes.radio,
      classes[`radio--${size}`],
      checked && classes['radio--checked'],
      error && classes['radio--error'],
      disabled && classes['radio--disabled'],
    )}
    description={description}
    disabled={disabled}
    hideLabel={hideLabel}
    inputId={radioId}
    label={label}
    name={name}
    onChange={onChange}
    presentation={presentation}
    size={
      size === RadioButtonSize.Xsmall
        ? CheckboxRadioTemplateSize.Xsmall
        : CheckboxRadioTemplateSize.Small
    }
    type='radio'
    value={value}
  >
    <span className={classes['visible-button']}>
      <span className={classes['visible-button__checkmark']} />
    </span>
  </CheckboxRadioTemplate>
);
