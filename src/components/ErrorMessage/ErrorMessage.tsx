import React from 'react';

import classes from './ErrorMessage.module.css';

export interface ErrorMessageProps {
  id?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}

/*
 * @deprecated Use ErrorMessage from @digdir/design-system-react instead.
 */
export const ErrorMessage = ({
  id,
  children,
  ariaLabel,
}: ErrorMessageProps) => {
  return (
    <div
      data-testid='ErrorMessage'
      aria-label={ariaLabel}
      id={id}
      role='alertdialog'
      className={classes['altinn-error-message-wrapper']}
    >
      {children}
    </div>
  );
};
