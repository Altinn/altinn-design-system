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
}: TextFieldProps) => {
  const { variant, iconVariant } = getVariant({ readOnly, disabled, isValid });
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
