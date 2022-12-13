import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import { ReactComponent as DataIcon } from '@/assets/Data.svg';

import type { PageProps } from './Page';
import { Page } from './Page';
import { PageHeader } from './PageHeader';
import { PageContent } from './PageContent';
import { PageColor, PageSize } from './Context';

const render = (props: Partial<PageProps> = {}) => {
  const allProps = {
    title: 'Panel title',
    children: (
      <>
        <PageHeader icon={<DataIcon />}>PageHeader</PageHeader>
        <PageContent> PageContent</PageContent>
      </>
    ),
    ...props,
  };

  renderRtl(<Page {...allProps} />);
};

describe('Page', () => {
  Object.values(PageColor).forEach((color) => {
    it(`should render a PageHeader and PageContent with ${color} classname when color is ${color}`, () => {
      render({ color });
      const otherColors = Object.values(PageColor).filter((c) => c !== color);

      const pageHeader = screen.getByTestId('page-header');

      expect(pageHeader.classList.contains(`page-header--${color}`)).toBe(true);
      otherColors.forEach((c) => {
        expect(pageHeader.classList.contains(`page-header--${c}`)).toBe(false);
      });
    });
  });

  Object.values(PageSize).forEach((size) => {
    it(`should render a PageHeader with ${size} classname when size is ${size}`, () => {
      render({ size });
      const otherSizes = Object.values(PageSize).filter((s) => s !== size);

      const pageHeader = screen.getByTestId('page-header');

      expect(pageHeader.classList.contains(`page-header--${size}`)).toBe(true);
      otherSizes.forEach((s) => {
        expect(pageHeader.classList.contains(`page-header--${s}`)).toBe(false);
      });
    });
  });
});
