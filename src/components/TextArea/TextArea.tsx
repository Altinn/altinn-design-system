import type { HTMLProps } from 'react';
import React from 'react';
import cn from 'classnames';

import { InputWrapper } from '../_InputWrapper';
import type { ReadOnlyVariant } from '../_InputWrapper';

import classes from './TextArea.module.css';

export interface TextAreaProps
  extends Omit<HTMLProps<HTMLTextAreaElement>, 'readOnly' | 'className'> {
  isValid?: boolean;
  readOnly?: boolean | ReadOnlyVariant;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}

/*
 * @deprecated Use TextArea from @digdir/design-system-react instead.
 */
export const TextArea = ({
  isValid = true,
  disabled = false,
  readOnly = false,
  resize = 'none',
  label,
  ...rest
}: TextAreaProps) => {
  return (
    <InputWrapper
      isValid={isValid}
      disabled={disabled}
      readOnly={readOnly}
      label={label}
      inputId={rest.id}
      inputRenderer={({ className, inputId }) => {
        return (
          <textarea
            {...rest}
            id={inputId}
            disabled={disabled}
            readOnly={Boolean(readOnly)}
            className={cn(
              className,
              classes['altinn-TextArea'],
              classes[`altinn-TextArea--resize-${resize}`],
            )}
          />
        );
      }}
    ></InputWrapper>
  );
};
