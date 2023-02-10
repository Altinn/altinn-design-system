/**
 * This is an internal component used for the Checkbox and RadioButton components,
 * as they have several similarities.
 */

import type { ChangeEventHandler, ReactNode } from 'react';
import React, { useId } from 'react';
import cn from 'classnames';

import classes from './CheckboxRadioTemplate.module.css';

export enum CheckboxRadioTemplateSize {
  Xsmall = 'xsmall',
  Small = 'small',
}

export interface CheckboxRadioTemplateProps {
  checked?: boolean;
  children: ReactNode;
  className?: string;
  description?: ReactNode;
  disabled?: boolean;
  hideInput?: boolean;
  hideLabel?: boolean;
  inputId?: string;
  inputWrapperClassName?: string;
  label?: ReactNode;
  name?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  presentation?: boolean;
  size: CheckboxRadioTemplateSize;
  type: 'checkbox' | 'radio';
  value?: string;
}

export const CheckboxRadioTemplate = ({
  checked,
  children,
  className,
  description,
  disabled,
  hideInput,
  hideLabel,
  inputId,
  label,
  name,
  onChange,
  presentation,
  size,
  type,
  value,
}: CheckboxRadioTemplateProps) => {
  const randomId = useId();
  const finalInputId = inputId ?? 'input-' + randomId;
  const labelId = label ? `${finalInputId}-label` : undefined;
  const descriptionId = description ? `${finalInputId}-description` : undefined;
  const showLabel = label && !hideLabel;

  return (
    <label
      className={cn(
        classes['altinn-template'],
        classes[`altinn-template--${size}`],
        disabled && classes['altinn-template--disabled'],
        className,
      )}
      htmlFor={inputId}
    >
      {!hideInput && (
        <span className={classes['altinn-template__input-wrapper']}>
          <input
            aria-describedby={descriptionId}
            aria-label={
              !showLabel && typeof label === 'string' ? label : undefined
            }
            aria-labelledby={showLabel ? labelId : undefined}
            checked={checked ?? false}
            className={classes['altinn-template__input-wrapper__input']}
            disabled={disabled}
            id={finalInputId}
            name={name}
            onChange={disabled ? undefined : onChange}
            role={presentation ? 'presentation' : undefined}
            type={type}
            value={value}
          />
          <span
            className={classes['altinn-template__input-wrapper__visible-box']}
          >
            {children}
          </span>
        </span>
      )}
      {(showLabel || description) && (
        <span className={classes['altinn-template__label-and-description']}>
          {showLabel && (
            <span
              className={
                classes['altinn-template__label-and-description__label']
              }
              id={labelId}
            >
              {label}
            </span>
          )}
          {description && (
            <span
              className={
                classes['altinn-template__label-and-description__description']
              }
              id={descriptionId}
            >
              {description}
            </span>
          )}
        </span>
      )}
    </label>
  );
};
