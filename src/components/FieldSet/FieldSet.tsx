import type { ReactNode } from 'react';
import React from 'react';
import cn from 'classnames';

import { ErrorMessage } from '@/components/ErrorMessage';

import classes from './FieldSet.module.css';

export interface FieldSetProps {
  children: ReactNode;
  className?: string;
  description?: ReactNode;
  disabled?: boolean;
  error?: ReactNode;
  legend?: ReactNode;
  size?: FieldSetSize;
}

export enum FieldSetSize {
  Xsmall = 'xsmall',
  Small = 'small',
}

/*
 * @deprecated Use FieldSet from @digdir/design-system-react instead.
 */
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
        classes['altinn-field-set'],
        classes[`altinn-field-set--${size}`],
        className,
      )}
      disabled={disabled}
    >
      {legend && (
        <legend className={classes['altinn-field-set__legend']}>
          {legend}
        </legend>
      )}
      {description && (
        <p className={classes['altinn-field-set__description']}>
          {description}
        </p>
      )}
      <div className={classes['altinn-field-set__content']}>{children}</div>
      {error && (
        <div className={classes['altinn-field-set__error-message']}>
          <ErrorMessage>{error}</ErrorMessage>
        </div>
      )}
    </fieldset>
  );
};
