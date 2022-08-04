import React from 'react';
import cn from 'classnames';

import classes from './ErrorMessage.module.css';

export interface ErrorMessageProps {
  message?: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <div className={cn(classes['error-message-wrapper'])}>{message}</div>;
};
