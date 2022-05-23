import React from 'react';
import cn from 'classnames';

import classes from './Button.module.css';

export interface ButtonProps {
  greeting?: string; // TODO: add props
}

export const Button = ({ greeting }: ButtonProps) => {
  return <div className={cn(classes.Button)}>{greeting} from Button</div>;
};
