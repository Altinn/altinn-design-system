import React from 'react';
import cn from 'classnames';
import type {
  NumberFormatProps,
  NumberFormatValues,
  SourceInfo,
} from 'react-number-format';
import NumberFormat from 'react-number-format';

import { InputWrapper } from '../_InputWrapper';
import type { ReadOnlyVariant } from '../_InputWrapper';

export interface TextFieldProps
  extends Omit<NumberFormatProps, 'readOnly' | 'value'> {
  value?: string;
  isValid?: boolean;
  readOnly?: boolean | ReadOnlyVariant;
  formatting?: TextFieldFormatting;
}

export interface TextFieldFormatting {
  number?: NumberFormatProps;
  align?: 'right' | 'center' | 'left';
}

interface ReplaceTargetValueWithUnformattedValueProps {
  values: NumberFormatValues;
  sourceInfo: SourceInfo;
}

const replaceTargetValueWithUnformattedValue = ({
  values,
  sourceInfo,
}: ReplaceTargetValueWithUnformattedValueProps) => {
  sourceInfo.event.target.value = values.value;
};

export const TextField = ({
  id,
  onChange,
  isValid = true,
  disabled = false,
  readOnly = false,
  required = false,
  formatting,
  ...rest
}: TextFieldProps) => {
  const handleNumberFormatChange = (
    values: NumberFormatValues,
    sourceInfo: SourceInfo,
  ) => {
    if (sourceInfo.source === 'event' && onChange) {
      replaceTargetValueWithUnformattedValue({
        values,
        sourceInfo,
      });
      onChange(sourceInfo.event);
    }
  };

  return (
    <InputWrapper
      isValid={isValid}
      disabled={disabled}
      readOnly={readOnly}
      inputRenderer={({ className, variant }) => {
        const commonProps = {
          id,
          readOnly: Boolean(readOnly),
          disabled,
          required,
          className: cn(className, rest.className),
          style: {
            textAlign: formatting?.align,
            ...rest.style,
          },
        };

        return formatting?.number ? (
          <NumberFormat
            {...commonProps}
            {...formatting.number}
            {...rest}
            data-testid={`${id}-formatted-number-${variant}`}
            onValueChange={handleNumberFormatChange}
            isNumericString={true}
          />
        ) : (
          <input
            {...commonProps}
            {...rest}
            data-testid={`${id}-${variant}`}
            onChange={onChange}
          />
        );
      }}
    ></InputWrapper>
  );
};
