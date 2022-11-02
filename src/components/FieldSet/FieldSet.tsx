import React from 'react';
import cn from 'classnames';

import { ErrorMessage } from '@/components';

import classes from './FieldSet.module.css';

export interface FieldSetProps {
  children: React.ReactNode;
  className?: string;
  description?: string;
  disabled?: boolean;
  error?: React.ReactNode;
  legend?: string;
  size?: FieldSetSize;
}

export enum FieldSetSize {
  Xsmall = 'xsmall',
  Small = 'small',
}

export const FieldSet = ({
  children,
  className,
  description,
  disabled,
  error,
  legend,
  size = FieldSetSize.Small,
}: FieldSetProps) => {
  return (
    <fieldset
      className={cn(
        classes['field-set'],
        classes[`field-set--${size}`],
        className,
      )}
      disabled={disabled}
    >
      {legend && (
        <legend className={classes['field-set__legend']}>{legend}</legend>
      )}
      {description && (
        <p className={classes['field-set__description']}>{description}</p>
      )}
      <div className={classes['field-set__content']}>{children}</div>
      {error && (
        <div className={classes['field-set__error-message']}>
          <ErrorMessage>{error}</ErrorMessage>
        </div>
      )}
    </fieldset>
  );
};
