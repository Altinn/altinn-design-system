import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { ButtonProps } from './Button';
import { ButtonColor, ButtonSize, Button, ButtonVariant } from './Button';

const user = userEvent.setup();

describe('Button', () => {
  it('should render a button with primary classname when no variant is specified', () => {
    render({ variant: undefined });
    const button = screen.getByRole('button');

    expect(button.classList.contains('button--primary')).toBe(true);
    expect(button.classList.contains('button--secondary')).toBe(false);
    expect(button.classList.contains('button--submit')).toBe(false);
    expect(button.classList.contains('button--cancel')).toBe(false);
  });

  Object.values(ButtonVariant).forEach((variant) => {
    it(`should render a button with ${variant} classname when variant is ${variant}`, () => {
      render({ variant });
      const otherVariants = Object.values(ButtonVariant).filter(
        (v) => v !== variant,
      );

      const button = screen.getByRole('button');

      expect(button.classList.contains(`button--${variant}`)).toBe(true);
      otherVariants.forEach((v) => {
        expect(button.classList.contains(`button--${v}`)).toBe(false);
      });
    });
  });

  it('should render as disabled when disabled is true regardless of variant', () => {
    render({
      variant: ButtonVariant.Outline,
      color: ButtonColor.Primary,
      size: ButtonSize.Small,
      disabled: true,
    });

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('should not call onClick when disabled', () => {
    const fn = jest.fn();
    render({
      variant: ButtonVariant.Outline,
      disabled: true,
      onClick: fn,
    });

    const button = screen.getByRole('button');
    user.click(button);
    expect(fn).not.toHaveBeenCalled();
  });

  it('should render children as button text', () => {
    render({ children: 'different button text' });
    expect(
      screen.getByRole('button', { name: 'different button text' }),
    ).toBeInTheDocument();
  });

  it('should handle onClick event', async () => {
    const fn = jest.fn();
    render({ onClick: fn });
    await user.click(screen.getByRole('button'));
    expect(fn).toHaveBeenCalled();
  });
});

const render = (props: Partial<ButtonProps> = {}) => {
  const allProps = {
    variant: ButtonVariant.Filled,
    color: ButtonColor.Primary,
    size: ButtonSize.Small,
    ...props,
  };

  renderRtl(<Button {...allProps} />);
};
