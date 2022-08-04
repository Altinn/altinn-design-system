import React from 'react';
import cn from 'classnames';

import classes from './ErrorMessage.module.css';

export interface ErrorMessageProps {
  greeting?: string; // TODO: add props
}

export const ErrorMessage = ({ greeting }: ErrorMessageProps) => {
  return (
    <div className={cn(classes.ErrorMessage)}>{greeting} from ErrorMessage</div>
  );
};
