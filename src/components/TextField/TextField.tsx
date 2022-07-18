import React from 'react';
import cn from 'classnames';
import type {
  NumberFormatProps,
  NumberFormatValues,
  SourceInfo,
} from 'react-number-format';
import NumberFormat from 'react-number-format';

import '@altinn/figma-design-tokens/dist/tokens.css';

import { ReactComponent as ErrorIcon } from './error.svg';
import classes from './TextField.module.css';
import type { ReadOnlyVariant } from './variants';
import { getVariants, IconVariant } from './variants';

export interface ITextFieldBaseProps {
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
        <div className={cn(classes['input-wrapper__icon'])}>
          <ErrorIcon
            className={cn(classes['input-wrapper__icon--error'])}
            data-testid='input-icon-error'
          />
        </div>
      );
  }
};

const handleFormattedValueChange = (
  values: NumberFormatValues,
  sourceInfo: SourceInfo,
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void,
) => {
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
          onValueChange={(values, sourceInfo) => {
            handleFormattedValueChange(values, sourceInfo, onChange);
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
