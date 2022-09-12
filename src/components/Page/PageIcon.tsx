import React, { cloneElement } from 'react';
import cn from 'classnames';

import classes from './PageIcon.module.css';
import { usePageContext } from './Context';

export interface PageIconProps {
  icon: React.ReactElement;
}

export const PageIcon = ({ icon }: PageIconProps) => {
  const { color } = usePageContext();
  const props = {
    className: cn(
      classes['page-icon__element'],
      classes[`page-icon__element--${color}`],
    ),
  };

  return (
    <div className={classes['page-icon']}>
      {cloneElement(icon, { ...props })}
    </div>
  );
};
