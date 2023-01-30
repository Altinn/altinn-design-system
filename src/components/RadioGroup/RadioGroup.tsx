import type { ChangeEvent, ReactNode } from 'react';
import React, { useEffect, useState } from 'react';

import { RadioButton, RadioButtonSize } from '@/components/RadioButton';
import { FieldSet, FieldSetSize } from '@/components/FieldSet';
import { usePrevious, useUpdate } from '@/hooks';
import { areItemsUnique } from '@/utils/arrayUtils';

import type { RadioButtonProps } from '../RadioButton/RadioButton';

import classes from './RadioGroup.module.css';

export type RadioItem = Omit<
  RadioButtonProps,
  'checked' | 'error' | 'name' | 'onChange' | 'showLabel' | 'size'
>;

export enum RadioGroupSize {
  Xsmall = 'xsmall',
  Small = 'small',
}

export enum RadioGroupVariant {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

export interface RadioGroupProps {
  description?: ReactNode;
  disabled?: boolean;
  error?: ReactNode;
  items: RadioItem[];
  legend?: ReactNode;
  name: string;
  onChange?: (value?: string) => void;
  presentation?: boolean;
  size?: RadioGroupSize;
  value?: string;
  variant?: RadioGroupVariant;
}

/*
 * @deprecated Use RadioGroup from @digdir/design-system-react instead.
 */
export const RadioGroup = ({
  description,
  disabled,
  error,
  items,
  legend,
  name,
  onChange,
  presentation,
  size = RadioGroupSize.Small,
  value,
  variant = RadioGroupVariant.Vertical,
}: RadioGroupProps) => {
  if (!areItemsUnique(items.map((item) => item.value))) {
    throw Error('Each value in the radio group must be unique.');
  }

  const [checkedValue, setCheckedValue] = useState<string | undefined>(value);

  useEffect(() => {
    setCheckedValue(value);
  }, [value]);

  const prevCheckedValue = usePrevious(checkedValue);

  useUpdate(() => {
    onChange &&
      !disabled &&
      prevCheckedValue !== checkedValue &&
      onChange(checkedValue);
  }, [checkedValue, disabled, onChange]);

  const changeHandler = (val: string) => (e: ChangeEvent<HTMLInputElement>) =>
    e.target.checked && setCheckedValue(val);

  const [fieldSetSize, radioButtonSize] =
    size === RadioGroupSize.Xsmall
      ? [FieldSetSize.Xsmall, RadioButtonSize.Xsmall]
      : [FieldSetSize.Small, RadioButtonSize.Small];

  return (
    <FieldSet
      description={description}
      disabled={disabled}
      error={error}
      legend={legend}
      size={fieldSetSize}
    >
      <div
        className={[
          classes['altinn-radio-group'],
          classes[`altinn-radio-group--${variant}`],
          classes[`altinn-radio-group--${size}`],
        ].join(' ')}
        role={presentation ? undefined : 'radiogroup'}
      >
        {items.map((radio) => (
          <RadioButton
            {...radio}
            checked={radio.value === checkedValue}
            disabled={disabled || radio.disabled}
            error={!!error}
            key={radio.value}
            name={name}
            onChange={changeHandler(radio.value)}
            presentation={presentation}
            size={radioButtonSize}
          />
        ))}
      </div>
    </FieldSet>
  );
};
