import React from 'react';
import cn from 'classnames';

import classes from './ErrorMessage.module.css';

export interface ErrorMessageProps {
  id?: string;
  message?: string | React.ReactNode;
  children?: React.ReactNode;
  ariaLabel?: string;
}

export const ErrorMessage = ({
  id,
  message,
  children,
  ariaLabel,
}: ErrorMessageProps) => {
  return (
    <div
      data-testid='ErrorMessage'
      aria-label={ariaLabel}
      id={id}
      key={id}
      role='alertdialog'
      className={cn(classes['error-message-wrapper'])}
    >
      {message ? message : children}
    </div>
  );
};
