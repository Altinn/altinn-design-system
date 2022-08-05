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
  const { variant, iconVariant } = getVariant({ readOnly, disabled, isValid });
  const isReadOnly = Boolean(readOnly);

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

  const commonProps = {
    id,
    readOnly: isReadOnly,
    disabled,
    required,
    className: cn(classes['input-wrapper__field'], rest.className),
    style: {
      textAlign: formatting?.align,
      ...rest.style,
    },
  };

  return (
    <div
      data-testid='TextField'
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
      )}
    </div>
  );
};
