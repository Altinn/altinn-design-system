/*
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
  description?: string;
  disabled?: boolean;
  hideInput?: boolean;
  hideLabel?: boolean;
  inputId?: string;
  inputWrapperClassName?: string;
  label?: string;
  name?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
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
        classes.template,
        classes[`template--${size}`],
        disabled && classes['template--disabled'],
        className,
      )}
      htmlFor={inputId}
    >
      {!hideInput && (
        <span className={classes['template__input-wrapper']}>
          <input
            aria-describedby={descriptionId}
            aria-label={!showLabel ? label : undefined}
            aria-labelledby={showLabel ? labelId : undefined}
            checked={checked ?? false}
            className={classes['template__input-wrapper__input']}
            disabled={disabled}
            id={finalInputId}
            name={name}
            onChange={disabled ? undefined : onChange}
            type={type}
            value={value}
          />
          <span className={classes['template__input-wrapper__visible-box']}>
            {children}
          </span>
        </span>
      )}
      {(showLabel || description) && (
        <span className={classes['template__label-and-description']}>
          {showLabel && (
            <span
              className={classes['template__label-and-description__label']}
              id={labelId}
            >
              {label}
            </span>
          )}
          {description && (
            <span
              className={
                classes['template__label-and-description__description']
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
