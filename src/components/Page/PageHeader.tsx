import React from 'react';
import cn from 'classnames';

import { usePageContext } from './Context';
import classes from './PageHeader.module.css';
import { PageIcon } from './PageIcon';

export interface PageHeaderProps {
  children?: React.ReactNode;
  icon?: JSX.Element;
}

export const PageHeader = ({ children, icon }: PageHeaderProps) => {
  const { color } = usePageContext();

  return (
    <header
      className={cn(classes['page-header'], classes[`page-header--${color}`])}
      data-testid='page-header'
    >
      {icon && <PageIcon icon={icon} />}
      <span>{children}</span>
    </header>
  );
};
