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

  it('should display text passed with message property', () => {
    render(<ErrorMessage message='This is an error message' />);
    expect(screen.getByRole('alertdialog')).toHaveTextContent(
      'This is an error message',
    );
  });

  it('should display text passed message property', () => {
    render(<ErrorMessage message='This is an error message' />);
    expect(screen.getByText('This is an error message')).toBeInTheDocument();
  });

  it('should render error message with accessible name when aria is defined', () => {
    render(
      <ErrorMessage
        message='This is an error message'
        ariaLabel={'Hello from aria'}
      />,
    );
    expect(
      screen.getByRole('alertdialog', {
        name: /Hello from aria/i,
      }),
    ).toHaveTextContent('This is an error message');
  });
});
