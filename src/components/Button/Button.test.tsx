import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { ButtonProps } from '@/components/Button/Button';
import { Button, ButtonColor } from '@/components/Button/Button';

const user = userEvent.setup();

describe('Button', () => {
  it('should render a button with primary classname when no variant is specified', () => {
    render({ variant: undefined });
    const button = screen.getByRole('button');

    expect(button.classList.contains('button--primary')).toBe(true);
    expect(button.classList.contains('button--secondary')).toBe(false);
    expect(button.classList.contains('button--submit')).toBe(false);
  });

  Object.values(ButtonColor).forEach((variant) => {
    it(`should render a button with ${variant} classname when variant is ${variant}`, () => {
      render({ variant });
      const otherVariants = Object.values(ButtonColor).filter(
        (v) => v !== variant,
      );

      const button = screen.getByRole('button');

      expect(button.classList.contains(`button--${variant}`)).toBe(true);
      otherVariants.forEach((v) => {
        expect(button.classList.contains(`button--${v}`)).toBe(false);
      });
    });
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
    ...props,
  };

  renderRtl(<Button {...allProps} />);
};
