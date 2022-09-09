import React from 'react';
import cn from 'classnames';

import { usePageContext } from './Context';
import classes from './PageHeader.module.css';

export interface PageHeaderProps {
  children?: React.ReactNode;
}

export const PageHeader = ({ children }: PageHeaderProps) => {
  const { variant } = usePageContext();

  return (
    <div
      className={cn(classes['page-header'], classes[`page-header--${variant}`])}
      data-testid='page-header'
    >
      {children}
    </div>
  );
};
