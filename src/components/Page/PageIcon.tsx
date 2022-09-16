import React, { cloneElement } from 'react';
import cn from 'classnames';

import classes from './PageIcon.module.css';

export interface PageIconProps {
  icon: React.ReactElement;
}

export const PageIcon = ({ icon }: PageIconProps) => {
  const props = {
    className: cn(classes['page-icon__element']),
  };

  return (
    <div className={classes['page-icon']}>
      {cloneElement(icon, { ...props })}
    </div>
  );
};
