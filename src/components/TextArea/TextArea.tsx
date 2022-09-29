import type { HTMLProps } from 'react';
import React from 'react';
import cn from 'classnames';

import { InputWrapper } from '@/components/_InputWrapper';
import type { ReadOnlyVariant } from '@/components/_InputWrapper';

import classes from './TextArea.module.css';

export interface TextAreaProps
  extends Omit<HTMLProps<HTMLTextAreaElement>, 'readOnly' | 'className'> {
  isValid?: boolean;
  readOnly?: boolean | ReadOnlyVariant;
  resize: 'none' | 'both' | 'horizontal' | 'vertical';
}

export const TextArea = ({
  isValid = true,
  disabled = false,
  readOnly = false,
  resize = 'none',
  ...rest
}: TextAreaProps) => {
  return (
    <InputWrapper
      isValid={isValid}
      disabled={disabled}
      readOnly={readOnly}
      inputRenderer={({ className }) => {
        return (
          <textarea
            {...rest}
            disabled={disabled}
            readOnly={Boolean(readOnly)}
            className={cn(
              className,
              classes['TextArea'],
              classes[`TextArea--resize-${resize}`],
            )}
          />
        );
      }}
    ></InputWrapper>
  );
};
