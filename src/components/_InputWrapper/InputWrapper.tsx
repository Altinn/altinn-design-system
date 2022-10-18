import React from 'react';
import type { ReactNode } from 'react';
import cn from 'classnames';

import type { ReadOnlyVariant, InputVariant } from './utils';
import { getVariant } from './utils';
import { Icon } from './Icon';
import classes from './InputWrapper.module.css';

type InputRendererProps = {
  className: string;
  variant: InputVariant;
};

export interface InputWrapperProps {
  isValid?: boolean;
  disabled?: boolean;
  readOnly?: boolean | ReadOnlyVariant;
  isSearch?: boolean;
  inputRenderer: (props: InputRendererProps) => ReactNode;
}

export const InputWrapper = ({
  isValid = true,
  disabled = false,
  readOnly = false,
  isSearch = false,
  inputRenderer,
}: InputWrapperProps) => {
  const { variant, iconVariant } = getVariant({
    readOnly,
    disabled,
    isValid,
    isSearch,
  });

  return (
    <div
      data-testid='InputWrapper'
      className={cn(
        classes['InputWrapper'],
        classes[`InputWrapper--${variant}`],
        { [classes[`InputWrapper--search`]]: isSearch },
      )}
    >
      <Icon
        variant={iconVariant}
        disabled={disabled}
      />
      {inputRenderer({
        className: classes['InputWrapper__field'],
        variant,
      })}
    </div>
  );
};
