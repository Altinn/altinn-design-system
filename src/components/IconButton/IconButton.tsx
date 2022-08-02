import React from 'react';
import cn from 'classnames';

import classes from './IconButton.module.css';

export interface IconButtonProps {
  greeting?: string; // TODO: add props
}

export const IconButton = ({ greeting }: IconButtonProps) => {
  return (
    <div className={cn(classes.IconButton)}>{greeting} from IconButton</div>
  );
};
