import React from 'react';
import { render, screen } from '@testing-library/react';

import { CircularProgress } from './CircularProgress';

describe('CircularProgress', () => {
  it('should render progressbar', () => {
    render(<CircularProgress value={25} />);
    screen.getByRole('progressbar');
  });
  it('should render progressbar with ariaLabel', () => {
    render(
      <CircularProgress
        value={25}
        ariaLabel={'Test label'}
      />,
    );
    const progressbar = screen.getByRole('progressbar', {
      name: /Test label/i,
    });
    expect(progressbar).toHaveAccessibleName('Test label');
  });
  it('should render progressbar with name from label', () => {
    render(
      <CircularProgress
        value={25}
        label={'Test label'}
      />,
    );
    const progressbar = screen.getByRole('progressbar', {
      name: /Test label/i,
    });
    expect(progressbar).toHaveAccessibleName('Test label');
  });
  it('should render progressbar with name from aria when label and aria is defined', () => {
    render(
      <CircularProgress
        value={25}
        ariaLabel={'Test label from aria'}
        label={'Test label from label'}
      />,
    );
    const progressbar = screen.getByRole('progressbar', {
      name: /Test label from aria/i,
    });
    expect(progressbar).toHaveAccessibleName('Test label from aria');
  });
});
