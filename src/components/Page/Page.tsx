import React from 'react';

import { PageColor, PageContext } from './Context';
import classes from './Page.module.css';

export interface PageProps {
  children?: React.ReactNode;
  color?: PageColor;
}

export const Page = ({ children, color = PageColor.Primary }: PageProps) => {
  return (
    <div className={classes['page']}>
      <PageContext.Provider value={{ color }}>{children}</PageContext.Provider>
    </div>
  );
};
