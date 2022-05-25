import React from 'react';
import type { ButtonProps } from '@/components/Button/Button';
import { Button } from '@/components/Button/Button';
import { render as renderRtl, screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';

describe('Button', () => {
  it(`should render a button in it's primary state`, () => {
    render();
    expect(screen.getByTestId('primary-button')).toBeInTheDocument();
    expect(screen.getByText('button text')).toBeInTheDocument();
  });
  it(`should render a button in it's submit state`, () => {
    render({ mode: 'submit' });
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });
  it(`should render a button in it's secondary state`, () => {
    render({ mode: 'secondary' });
    expect(screen.getByTestId('secondary-button')).toBeInTheDocument();
  });
  it('should render different button text', () => {
    render({}, 'different button text');
    expect(screen.getByText('different button text')).toBeInTheDocument();
  });
  it('should handle onClick event', async () => {
    const fn = jest.fn();
    render({ onClick: fn });
    await userEvent.click(screen.getByRole('button'));
    expect(fn).toHaveBeenCalled();
  });
  it('should not handle onClick event if button is disabled', async () => {
    const fn = jest.fn();
    render({ disabled: true, onClick: fn });
    await userEvent.click(screen.getByRole('button'));
    expect(fn).not.toHaveBeenCalled();
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
