import React from 'react';
import { render, screen } from '@testing-library/react';

import { CircularProgress } from './CircularProgress';

describe('CircularProgress', () => {
  it('should render progressbar', () => {
    render(
      <CircularProgress
        value={25}
        width={100}
      />,
    );
    screen.getByRole('progressbar');
  });
  it('should render progressbar with name', () => {
    render(
      <CircularProgress
        value={25}
        width={100}
        aria={{ 'aria-label': 'Test label' }}
      />,
    );
    const progressbar = screen.getByRole('progressbar', {
      name: /Test label/i,
    });
    expect(progressbar).toHaveAccessibleName('Test label');
  });
});
