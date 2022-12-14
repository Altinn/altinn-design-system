import React from 'react';
import cn from 'classnames';

import { SvgIcon } from '../SvgIcon';

import { PageSize, usePageContext } from './Context';
import classes from './PageHeader.module.css';

export interface PageHeaderProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export const PageHeader = ({ children, icon }: PageHeaderProps) => {
  const { color, size } = usePageContext();
  const iconSize = size === PageSize.Small ? 28 : 40;

  return (
    <header
      className={cn(
        classes['page-header'],
        classes[`page-header--${color}`],
        classes[`page-header--${size}`],
      )}
    >
      <SvgIcon
        width={iconSize}
        height={iconSize}
        svgIconComponent={icon}
      />
      <span>{children}</span>
    </header>
  );
};
