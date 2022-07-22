import React from 'react';
import cn from 'classnames';
import type {
  NumberFormatProps,
  NumberFormatValues,
  SourceInfo,
} from 'react-number-format';
import NumberFormat from 'react-number-format';

import type { ReadOnlyVariant } from './utils';
import { getVariant } from './utils';
import { Icon } from './Icon';
import classes from './TextField.module.css';

export interface TextFieldProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'readOnly' | 'value'
  > {
  value?: string;
  isValid?: boolean;
  readOnly?: boolean | ReadOnlyVariant;
  ariaDescribedBy?: string;
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
  value,
  onChange,
  onBlur,
  onPaste,
  isValid = true,
  disabled = false,
  readOnly = false,
  required = false,
  ariaDescribedBy,
  formatting,
  ...rest
}: TextFieldProps) => {
  const { variant, iconVariant } = getVariant({ readOnly, disabled, isValid });
  const isReadOnly = Boolean(readOnly);

  const handleNumberFormatChange = (
    values: NumberFormatValues,
    sourceInfo: SourceInfo,
  ) => {
    replaceTargetValueWithUnformattedValue({
      values,
      sourceInfo,
    });
    onChange && onChange(sourceInfo.event);
  };

  const commonProps = {
    id,
    value,
    onBlur,
    onPaste,
    readOnly: isReadOnly,
    disabled,
    required,
    'aria-describedby': ariaDescribedBy,
    'aria-readonly': isReadOnly,
    className: classes['input-wrapper__field'],
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
          {...commonProps}
          {...formatting.number}
          data-testid={`${id}-formatted-number-${variant}`}
          onValueChange={handleNumberFormatChange}
        />
      ) : (
        <input
          {...rest}
          {...commonProps}
          data-testid={`${id}-${variant}`}
          onChange={onChange}
        />
      )}
    </div>
  );
};
