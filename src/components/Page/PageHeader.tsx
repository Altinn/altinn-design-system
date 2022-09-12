import React from 'react';
import cn from 'classnames';

import { usePageContext } from './Context';
import classes from './PageHeader.module.css';
import { PageIcon } from './PageIcon';

export interface PageHeaderProps {
  children?: React.ReactNode;
  icon: JSX.Element;
}

export const PageHeader = ({ children, icon }: PageHeaderProps) => {
  const { color } = usePageContext();

  return (
    <div
      className={cn(classes['page-header'], classes[`page-header--${color}`])}
      data-testid='page-header'
    >
      <PageIcon icon={icon} />
      <span className={cn(classes['page-header__title'])}>{children}</span>
    </div>
  );
};
