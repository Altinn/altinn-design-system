import React from 'react';
import cn from 'classnames';
import type { NumberFormatProps } from 'react-number-format';
import NumberFormat from 'react-number-format';

import '@altinn/figma-design-tokens/dist/tokens.css';

import { ReactComponent as ErrorIcon } from './error.svg';
import classes from './TextField.module.css';

enum InputVariant {
  Default = 'default',
  Error = 'error',
  Disabled = 'disabled',
  ReadonlyInfo = 'readonly-info',
  ReadonlyConfirm = 'readonly-confirm',
}

export enum ReadOnlyVariant {
  ReadonlyInfo = 'readonly-info',
  ReadonlyConfirm = 'readonly-confirm',
}

export enum IconVariant {
  None = 'none',
  Error = 'error',
}

export interface ITextFieldBaseProps {
  id: string;
  value?: any;
  onBlur?: (value: any) => void;
  onChange?: (value: any) => void;
  disabled?: boolean;
  isValid?: boolean;
  readOnly?: boolean | ReadOnlyVariant;
  required?: boolean;
  ariaDescribedBy?: string;
}

export interface ITextFieldFormatting {
  number?: NumberFormatProps;
  align?: 'right' | 'center' | 'left';
}

export interface ITextFieldProps extends ITextFieldBaseProps {
  formatting?: ITextFieldFormatting;
}

const renderIcon = (variant: IconVariant) => {
  switch (variant) {
    case IconVariant.Error:
      return (
        <ErrorIcon
          className={cn(classes['input-wrapper__icon--error'])}
          data-testid='input-icon-error'
        />
      );
  }
};

const handleFormattedValueChange = (
  values: any,
  onChange?: (value: any) => void,
) => {
  if (onChange) {
    onChange({
      target: {
        value: values.value,
      },
    });
  }
};

export const TextField = ({
  id,
  value,
  onBlur,
  onChange,
  isValid,
  disabled,
  readOnly,
  required,
  ariaDescribedBy,
  formatting,
}: ITextFieldProps) => {
  let variant: InputVariant;
  let iconVariant: IconVariant;

  if (disabled) {
    variant = InputVariant.Disabled;
    iconVariant = IconVariant.None;
  } else if (readOnly === true) {
    variant = InputVariant.ReadonlyInfo;
    iconVariant = IconVariant.None;
  } else if (readOnly === ReadOnlyVariant.ReadonlyInfo) {
    variant = InputVariant.ReadonlyInfo;
    iconVariant = IconVariant.None;
  } else if (readOnly === ReadOnlyVariant.ReadonlyConfirm) {
    variant = InputVariant.ReadonlyConfirm;
    iconVariant = IconVariant.None;
  } else if (!isValid) {
    variant = InputVariant.Error;
    iconVariant = IconVariant.Error;
  } else {
    variant = InputVariant.Default;
    iconVariant = IconVariant.None;
  }

  const props = {
    id: id,
    value: value,
    onBlur: onBlur,
    readOnly: !!readOnly,
    disabled: disabled,
    required: required,
    'aria-describedby': ariaDescribedBy,
    'aria-readonly': !!readOnly,
    className: cn(classes['input-wrapper__field']),
    style: { textAlign: formatting?.align },
  };

  return (
    <div
      className={cn(
        classes['input-wrapper'],
        classes[`input-wrapper--${variant}`],
      )}
    >
      {renderIcon(iconVariant)}
      {formatting?.number ? (
        <NumberFormat
          {...props}
          {...formatting.number}
          data-testid={`${props.id}-formatted-number-${variant}`}
          onValueChange={(values) => {
            handleFormattedValueChange(values, onChange);
          }}
        />
      ) : (
        <input
          {...props}
          data-testid={`${props.id}-${variant}`}
          onChange={onChange}
        />
      )}
    </div>
  );
};
