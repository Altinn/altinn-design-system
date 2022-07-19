import React from 'react';
import cn from 'classnames';
import type {
  NumberFormatProps,
  NumberFormatValues,
  SourceInfo,
} from 'react-number-format';
import NumberFormat from 'react-number-format';

import type { ReadOnlyVariant } from './variants';
import { getVariants, IconVariant } from './variants';
import { ReactComponent as ErrorIcon } from './error.svg';
import classes from './TextField.module.css';

export interface TextFieldBaseProps {
  id: string;
  value?: string;
  onBlur?: (value: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  isValid?: boolean;
  readOnly?: boolean | ReadOnlyVariant;
  required?: boolean;
  ariaDescribedBy?: string;
}

export interface TextFieldFormatting {
  number?: NumberFormatProps;
  align?: 'right' | 'center' | 'left';
}

export interface ITextFieldProps extends TextFieldBaseProps {
  formatting?: TextFieldFormatting;
}

interface IconProps {
  variant: IconVariant;
}

const Icon = ({ variant }: IconProps) => {
  if (variant === IconVariant.Error) {
    return (
      <div className={cn(classes['input-wrapper__icon'])}>
        <ErrorIcon
          className={cn(classes['input-wrapper__icon--error'])}
          data-testid='input-icon-error'
        />
      </div>
    );
  }

  return null;
};

interface HandleFormattedValueChangeProps {
  values: NumberFormatValues;
  sourceInfo: SourceInfo;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

const handleFormattedValueChange = ({
  values,
  sourceInfo,
  onChange,
}: HandleFormattedValueChangeProps) => {
  if (onChange) {
    sourceInfo.event.target.value = values.value;
    onChange(sourceInfo.event);
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
  const { variant, iconVariant } = getVariants(readOnly, disabled, isValid);
  const isReadOnly = Boolean(readOnly);

  const props = {
    id,
    value,
    onBlur,
    readOnly: isReadOnly,
    disabled,
    required,
    'aria-describedby': ariaDescribedBy,
    'aria-readonly': isReadOnly,
    className: cn(classes['input-wrapper__field']),
    style: {
      textAlign: formatting?.align,
    },
  };

  return (
    <div
      className={cn(
        classes['input-wrapper'],
        classes[`input-wrapper--${variant}`],
      )}
    >
      <Icon variant={iconVariant} />
      {formatting?.number ? (
        <NumberFormat
          {...props}
          {...formatting.number}
          data-testid={`${props.id}-formatted-number-${variant}`}
          onValueChange={(values, sourceInfo) => {
            handleFormattedValueChange({ values, sourceInfo, onChange });
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
