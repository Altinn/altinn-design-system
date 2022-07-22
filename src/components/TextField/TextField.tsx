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

export interface TextFieldProps {
  id: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (value: React.FocusEvent<HTMLInputElement>) => void;
  onPaste?: (value: React.ClipboardEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
  isValid?: boolean;
  readOnly?: boolean | ReadOnlyVariant;
  required?: boolean;
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
  onBlur,
  onChange,
  onPaste,
  isValid = true,
  disabled = false,
  readOnly = false,
  required = false,
  ariaDescribedBy,
  formatting,
}: TextFieldProps) => {
  const { variant, iconVariant } = getVariant({ readOnly, disabled, isValid });
  const isReadOnly = Boolean(readOnly);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (readOnly === false && onBlur) {
      onBlur(event);
    }
  };

  const handleNumberFormatChange = (
    values: NumberFormatValues,
    sourceInfo: SourceInfo,
  ) => {
    replaceTargetValueWithUnformattedValue({
      values,
      sourceInfo,
    });
    onChange(sourceInfo.event);
  };

  const commonProps = {
    id,
    value,
    onBlur: handleBlur,
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
          {...commonProps}
          data-testid={`${id}-${variant}`}
          onChange={onChange}
        />
      )}
    </div>
  );
};
