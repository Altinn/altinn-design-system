import React from 'react';

import { PageColor, PageContext, PageSize } from './Context';
import classes from './Page.module.css';

export interface PageProps {
  children?: React.ReactNode;
  color?: PageColor;
  size?: PageSize;
}

export const Page = ({
  children,
  color = PageColor.Primary,
  size = PageSize.Medium,
}: PageProps) => {
  return (
    <div className={classes['page']}>
      <PageContext.Provider value={{ color, size }}>
        {children}
      </PageContext.Provider>
    </div>
  );
};
