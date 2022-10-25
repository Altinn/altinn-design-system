import React from 'react';
import cn from 'classnames';
import type {
  NumericFormatProps,
  PatternFormatProps,
  NumberFormatValues,
  SourceInfo,
} from 'react-number-format';
import { NumericFormat, PatternFormat } from 'react-number-format';

import { InputWrapper } from '../_InputWrapper';
import type { ReadOnlyVariant } from '../_InputWrapper';

export interface TextFieldProps
  extends Omit<
    NumericFormatProps | PatternFormatProps,
    'readOnly' | 'value' | 'defaultValue'
  > {
  value?: string;
  isValid?: boolean;
  readOnly?: boolean | ReadOnlyVariant;
  defaultValue?: string | number;
  formatting?: TextFieldFormatting;
}

export interface TextFieldFormatting {
  number?: NumericFormatProps | PatternFormatProps;
  align?: 'right' | 'center' | 'left';
}

function isPatternFormat(
  numberFormat: NumericFormatProps | PatternFormatProps,
): numberFormat is PatternFormatProps {
  return (numberFormat as PatternFormatProps).format !== undefined;
}

function isNumericFormat(
  numberFormat: NumericFormatProps | PatternFormatProps,
): numberFormat is NumericFormatProps {
  return (numberFormat as PatternFormatProps).format === undefined;
}

interface ReplaceTargetValueWithUnformattedValueProps {
  values: NumberFormatValues;
  sourceInfo: SourceInfo;
}

const replaceTargetValueWithUnformattedValue = ({
  values,
  sourceInfo,
}: ReplaceTargetValueWithUnformattedValueProps) => {
  (sourceInfo.event as React.ChangeEvent<HTMLInputElement>).target.value =
    values.value.trim();
};

// Mitigates this issue: https://github.com/s-yadav/react-number-format/issues/694
// Remove if fixed
const numericKeyDown = (
  e: React.KeyboardEvent<HTMLInputElement>,
  prefix?: string,
  suffix?: string,
) => {
  const el = e.target as HTMLInputElement;
  const { key } = e;
  const { selectionStart, selectionEnd, value = '' } = el;

  if (selectionStart !== null && selectionEnd !== null) {
    const negative = value[0] === '-';

    const prefixLength = prefix?.length || 0 + (negative ? 1 : 0);
    const suffixLength = suffix?.length || 0;

    // If the number is negative, allow deleting the minus (-) sign
    if (negative && selectionEnd <= prefixLength && key === 'Backspace') {
      el.setSelectionRange(1, 1);
    } else {
      // Make sure selection is within the bounds of prefix/suffix
      el.setSelectionRange(
        Math.min(
          Math.max(selectionStart, prefixLength),
          value.length - suffixLength,
        ),
        Math.max(
          Math.min(selectionEnd, value.length - suffixLength),
          prefixLength,
        ),
      );
    }
  }
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
      onChange(sourceInfo.event as React.ChangeEvent<HTMLInputElement>);
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

        if (formatting?.number && isNumericFormat(formatting.number)) {
          // Prefix starting with '-' causes problems, add a leading space
          if (formatting.number.prefix && formatting.number.prefix[0] === '-') {
            formatting.number.prefix = ` ${formatting.number.prefix}`;
          }

          return (
            <NumericFormat
              {...commonProps}
              {...formatting.number}
              {...rest}
              data-testid={`${id}-formatted-number-${variant}`}
              onValueChange={handleNumberFormatChange}
              valueIsNumericString={true}
              onKeyDown={(e) =>
                numericKeyDown(
                  e,
                  (formatting.number as NumericFormatProps).prefix,
                  (formatting.number as NumericFormatProps).suffix,
                )
              }
            />
          );
        } else if (formatting?.number && isPatternFormat(formatting.number)) {
          return (
            <PatternFormat
              {...commonProps}
              {...formatting.number}
              {...rest}
              data-testid={`${id}-formatted-number-${variant}`}
              onValueChange={handleNumberFormatChange}
              valueIsNumericString={true}
            />
          );
        } else {
          return (
            <input
              {...commonProps}
              {...rest}
              data-testid={`${id}-${variant}`}
              onChange={onChange}
            />
          );
        }
      }}
    />
  );
};
