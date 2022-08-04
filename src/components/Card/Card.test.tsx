import React from 'react';
import { render as renderRtl } from '@testing-library/react';

import type { CardProps } from './Card';
import { Card } from './Card';
import { CardHeader } from './CardHeader';
import { CardContent } from './CardContent';

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
  it('Should be variant primary when variant is not defined');
  render();
});
