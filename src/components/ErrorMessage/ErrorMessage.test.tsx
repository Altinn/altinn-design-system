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
    expect(screen.getByText('This is an error message')).toBeInTheDocument();
  });
});
