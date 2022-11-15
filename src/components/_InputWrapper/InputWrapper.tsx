import React, { useId } from 'react';
import type { ReactNode } from 'react';
import cn from 'classnames';

import type { ReadOnlyVariant, InputVariant } from './utils';
import { getVariant } from './utils';
import { Icon } from './Icon';
import classes from './InputWrapper.module.css';

type InputRendererProps = {
  className: string;
  inputId: string;
  variant: InputVariant;
};

export interface InputWrapperProps {
  isValid?: boolean;
  withErrorIcon?: boolean;
  disabled?: boolean;
  readOnly?: boolean | ReadOnlyVariant;
  isSearch?: boolean;
  label?: string;
  noFocusEffect?: boolean;
  noPadding?: boolean;
  inputId?: string;
  inputRenderer: (props: InputRendererProps) => ReactNode;
}

export const InputWrapper = ({
  isValid = true,
  disabled = false,
  readOnly = false,
  isSearch = false,
  label,
  inputId,
  inputRenderer,
  noFocusEffect,
  noPadding,
  withErrorIcon,
}: InputWrapperProps) => {
  const randomInputId = useId();
  const givenOrRandomInputId = inputId ?? randomInputId;

  const { variant, iconVariant } = getVariant({
    readOnly,
    disabled,
    isValid,
    isSearch,
    withErrorIcon,
  });

  return (
    <>
      {label && (
        <label
          data-testid='InputWrapper-label'
          className={cn(classes['InputWrapper__label'])}
          htmlFor={givenOrRandomInputId}
        >
          {label}
        </label>
      )}
      <div
        data-testid='InputWrapper'
        className={cn(
          classes['InputWrapper'],
          classes[`InputWrapper--${variant}`],
          {
            [classes[`InputWrapper--search`]]: isSearch,
            [classes[`InputWrapper--with-focus-effect`]]: !noFocusEffect,
            [classes[`InputWrapper--with-padding`]]: !noPadding,
          },
        )}
      >
        <Icon
          variant={iconVariant}
          disabled={disabled}
        />
        {inputRenderer({
          className: classes['InputWrapper__field'],
          inputId: givenOrRandomInputId,
          variant,
        })}
      </div>
    </>
  );
};
