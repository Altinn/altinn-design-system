import React from 'react';

import { PageVariant, PageContext } from './Context';
import classes from './Page.module.css';

export interface PageProps {
  children?: React.ReactNode;
  variant?: PageVariant;
}

export const Page = ({
  children,
  variant = PageVariant.Primary,
}: PageProps) => {
  return (
    <div className={classes['Page']}>
      <PageContext.Provider value={{ variant }}>
        {children}
      </PageContext.Provider>
    </div>
  );
};
