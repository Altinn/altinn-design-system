import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import type { PageProps } from './Page';
import { Page } from './Page';
import { PageHeader } from './PageHeader';
import { PageContent } from './PageContent';
import { PageColor } from './Context';
import { ReactComponent as ClientBold } from './ClientBold.svg';

const render = (props: Partial<PageProps> = {}) => {
  const allProps = {
    title: 'Panel title',
    children: (
      <>
        <PageHeader icon={<ClientBold />}>PageHeader</PageHeader>
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

    it(`should render a PageHeader and PageContent with ${color} classname when color is not set`, () => {
      render();
      const otherColors = Object.values(PageColor).filter((c) => c !== color);

      const pageHeader = screen.getByTestId('page-header');

      expect(pageHeader.classList.contains(`page-header--${color}`)).toBe(true);
      otherColors.forEach((c) => {
        expect(pageHeader.classList.contains(`page-header--${c}`)).toBe(false);
      });
    });
  });
});
