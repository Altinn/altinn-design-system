import { render, screen } from '@testing-library/react';
import React from 'react';

import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage', () => {
  it('should display text passed to children property as a list', () => {
    render(
      <ErrorMessage>
        <ol>
          <li>This is an error message</li>
        </ol>
      </ErrorMessage>,
    );
    expect(screen.getByRole('alertdialog')).toHaveTextContent(
      'This is an error message',
    );
  });

  it('should render error message with accessible name when aria is defined', () => {
    render(
      <ErrorMessage ariaLabel={'Hello from aria'}>
        This is an error message
      </ErrorMessage>,
    );
    expect(
      screen.getByRole('alertdialog', {
        name: /Hello from aria/i,
      }),
    ).toHaveTextContent('This is an error message');
  });
});
