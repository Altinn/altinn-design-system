import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import type { CardProps } from './Card';
import { Card } from './Card';
import { CardHeader } from './CardHeader';
import { CardContent } from './CardContent';
import { CardVariant } from './Context';

const render = (props: Partial<CardProps> = {}) => {
  const allProps = {
    title: 'Panel title',
    children: (
      <>
        <CardHeader>CardHeader</CardHeader>
        <CardContent>CardContent</CardContent>
      </>
    ),
    ...props,
  };

  renderRtl(<Card {...allProps} />);
};

describe('Card', () => {
  Object.values(CardVariant).forEach((variant) => {
    it(`should render a CardHeader and CardContent with ${variant} classname when variant is ${variant}`, () => {
      render({ variant });
      const otherVariants = Object.values(CardVariant).filter(
        (v) => v !== variant,
      );

      const cardHeader = screen.getByTestId('card-header');
      const cardContent = screen.getByTestId('card-content');

      expect(cardHeader.classList.contains(`card-header--${variant}`)).toBe(
        true,
      );
      otherVariants.forEach((v) => {
        expect(cardHeader.classList.contains(`card-header--${v}`)).toBe(false);
      });
      expect(cardContent.classList.contains(`card-content--${variant}`)).toBe(
        true,
      );
      otherVariants.forEach((v) => {
        expect(cardContent.classList.contains(`card-content--${v}`)).toBe(
          false,
        );
      });
    });

    it(`should render a CardHeader and CardContent with ${variant} classname when variant is not set`, () => {
      render();
      const otherVariants = Object.values(CardVariant).filter(
        (v) => v !== variant,
      );

      const cardHeader = screen.getByTestId('card-header');
      const cardContent = screen.getByTestId('card-content');

      expect(cardHeader.classList.contains(`card-header--${variant}`)).toBe(
        true,
      );
      otherVariants.forEach((v) => {
        expect(cardHeader.classList.contains(`card-header--${v}`)).toBe(false);
      });
      expect(cardContent.classList.contains(`card-content--${variant}`)).toBe(
        true,
      );
      otherVariants.forEach((v) => {
        expect(cardContent.classList.contains(`card-content--${v}`)).toBe(
          false,
        );
      });
    });
  });
});
