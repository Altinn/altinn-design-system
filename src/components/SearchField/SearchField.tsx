import React from 'react';
import type { HTMLProps } from 'react';
import cn from 'classnames';

import { InputWrapper } from '../_InputWrapper';

export interface SearchFieldProps
  extends Omit<HTMLProps<HTMLInputElement>, 'readOnly' | 'className'> {
  value?: string;
}

export const SearchField = ({
  id,
  onChange,
  disabled = false,
  label,
  ...rest
}: SearchFieldProps) => {
  return (
    <InputWrapper
      disabled={disabled}
      isSearch={true}
      label={label}
      inputRenderer={({ className, variant }) => {
        const commonProps = {
          id,
          disabled,
          className: cn(className),
        };
        return (
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
