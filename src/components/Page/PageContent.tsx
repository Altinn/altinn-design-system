import React from 'react';
import cn from 'classnames';

import classes from './PageContent.module.css';
import { usePageContext } from './Context';

export interface PageContentProps {
  children?: React.ReactNode;
}

export const PageContent = ({ children }: PageContentProps) => {
  const { color: variant } = usePageContext();

  return (
    <div
      className={cn(
        classes[`page-content`],
        classes[`page-content--${variant}`],
      )}
      data-testid='page-content'
    >
      {children}
    </div>
  );
};
