import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import type { PageProps } from './Page';
import { Page } from './Page';
import { PageHeader } from './PageHeader';
import { PageContent } from './PageContent';
import { PageVariant } from './Context';

const render = (props: Partial<PageProps> = {}) => {
  const allProps = {
    title: 'Panel title',
    children: (
      <>
        <PageHeader>PageHeader</PageHeader>
        <PageContent>PageContent</PageContent>
      </>
    ),
    ...props,
  };

  renderRtl(<Page {...allProps} />);
};

describe('Page', () => {
  Object.values(PageVariant).forEach((variant) => {
    it(`should render a PageHeader and PageContent with ${variant} classname when variant is ${variant}`, () => {
      render({ variant });
      const otherVariants = Object.values(PageVariant).filter(
        (v) => v !== variant,
      );

      const pageHeader = screen.getByTestId('page-header');
      const pageContent = screen.getByTestId('page-content');

      expect(pageHeader.classList.contains(`page-header--${variant}`)).toBe(
        true,
      );
      otherVariants.forEach((v) => {
        expect(pageHeader.classList.contains(`page-header--${v}`)).toBe(false);
      });
      expect(pageContent.classList.contains(`page-content--${variant}`)).toBe(
        true,
      );
      otherVariants.forEach((v) => {
        expect(pageContent.classList.contains(`page-content--${v}`)).toBe(
          false,
        );
      });
    });

    it(`should render a PageHeader and PageContent with ${variant} classname when variant is not set`, () => {
      render();
      const otherVariants = Object.values(PageVariant).filter(
        (v) => v !== variant,
      );

      const pageHeader = screen.getByTestId('page-header');
      const pageContent = screen.getByTestId('page-content');

      expect(pageHeader.classList.contains(`page-header--${variant}`)).toBe(
        true,
      );
      otherVariants.forEach((v) => {
        expect(pageHeader.classList.contains(`page-header--${v}`)).toBe(false);
      });
      expect(pageContent.classList.contains(`page-content--${variant}`)).toBe(
        true,
      );
      otherVariants.forEach((v) => {
        expect(pageContent.classList.contains(`page-content--${v}`)).toBe(
          false,
        );
      });
    });
  });
});
