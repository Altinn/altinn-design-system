import React from 'react';
import cn from 'classnames';

import classes from './PageContent.module.css';

export interface PageContentProps {
  children?: React.ReactNode;
}

export const PageContent = ({ children }: PageContentProps) => {
  return (
    <div
      className={cn(classes[`page-content`])}
      data-testid='page-content'
    >
      {children}
    </div>
  );
};
