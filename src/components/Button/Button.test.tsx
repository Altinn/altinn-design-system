import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { ButtonProps } from '@/components/Button/Button';
import { Button, ButtonVariant } from '@/components/Button/Button';

const user = userEvent.setup();

describe('Button', () => {
  it(`should render a button in it's primary state`, () => {
    render();
    expect(screen.getByTestId('primary-button')).toBeInTheDocument();
    expect(screen.getByText('button text')).toBeInTheDocument();
  });

  it(`should render a button in it's submit state`, () => {
    render({ variant: ButtonVariant.Submit });
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  it(`should render a button in it's secondary state`, () => {
    render({ variant: ButtonVariant.Secondary });
    expect(screen.getByTestId('secondary-button')).toBeInTheDocument();
  });

  it('should render different button text', () => {
    render({}, 'different button text');
    expect(screen.getByText('different button text')).toBeInTheDocument();
  });

  it('should handle onClick event', async () => {
    const fn = jest.fn();
    render({ onClick: fn });
    await user.click(screen.getByRole('button'));
    expect(fn).toHaveBeenCalled();
  });
});

const render = (
  props: Partial<ButtonProps> = {},
  buttonText = 'button text',
) => {
  const allProps = {
    ...props,
  };

  renderRtl(<Button {...allProps}>{buttonText}</Button>);
};
