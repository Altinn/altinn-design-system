import React from 'react';
import cn from 'classnames';

import classes from './ErrorMessage.module.css';

export interface ErrorMessageProps {
  id?: string;
  message?: string | React.ReactNode;
  children?: React.ReactNode;
}

export const ErrorMessage = ({ id, message, children }: ErrorMessageProps) => {
  return (
    <div
      data-testid={`message-component-${id}`}
      id={id}
      key={id}
      className={cn(classes['error-message-wrapper'])}
    >
      {message ? message : children}
    </div>
  );
};
