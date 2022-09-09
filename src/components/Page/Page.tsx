import React from 'react';

import { PageColor, PageContext } from './Context';
import classes from './Page.module.css';

export interface PageProps {
  children?: React.ReactNode;
  color?: PageColor;
}

export const Page = ({
  children,
  color: variant = PageColor.Primary,
}: PageProps) => {
  return (
    <div className={classes['Page']}>
      <PageContext.Provider value={{ color: variant }}>
        {children}
      </PageContext.Provider>
    </div>
  );
};
