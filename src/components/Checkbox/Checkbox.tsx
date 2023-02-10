import type { ChangeEventHandler, ReactNode } from 'react';
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
  description?: ReactNode;
  disabled?: boolean;
  error?: boolean;
  hideLabel?: boolean;
  label?: ReactNode;
  name?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  presentation?: boolean;
  readOnly?: boolean;
}

/**
 * @deprecated Use Checkbox from @digdir/design-system-react instead.
 */
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
  presentation,
  readOnly,
}: CheckboxProps) => (
  <CheckboxRadioTemplate
    checked={checked}
    className={cn(
      classes['altinn-checkbox'],
      checked && classes['altinn-checkbox--checked'],
      error && classes['altinn-checkbox--error'],
      disabled && classes['altinn-checkbox--disabled'],
      compact && classes['altinn-checkbox--compact'],
      readOnly && classes['altinn-checkbox--read-only'],
    )}
    description={description}
    disabled={disabled}
    hideInput={readOnly}
    hideLabel={hideLabel}
    inputId={checkboxId}
    label={label}
    name={name}
    onChange={onChange}
    presentation={presentation}
    size={
      compact
        ? CheckboxRadioTemplateSize.Xsmall
        : CheckboxRadioTemplateSize.Small
    }
    type='checkbox'
  >
    <span className={classes['altinn-visible-box']}>
      <span className={classes['altinn-visible-box__checkmark']} />
    </span>
  </CheckboxRadioTemplate>
);
