import { render as renderRtl, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

import { ReactComponent as BackIcon } from './BackIcon.svg';
import type { IconButtonProps } from './IconButton';
import { IconButton, IconButtonVariant, IconButtonSize } from './IconButton';

const render = (props: Partial<IconButtonProps> = {}) => {
  const allProps = {
    icon: <BackIcon />,
    variant: IconButtonVariant.Secondary,
    size: IconButtonSize.Small,
    onClick: jest.fn(),
    ...props,
  };

  renderRtl(<IconButton {...allProps} />);
};

const user = userEvent.setup();

describe('IconButton', () => {
  Object.values(IconButtonSize).forEach((size) => {
    it(`should render IconButton with correct classname when variant is ${size}`, () => {
      render({ size });
      const otherSizes = Object.values(IconButtonSize).filter((s) => s != size);
      const iconButtonWrapper = screen.getByTestId('icon-button-wrapper');

      expect(
        iconButtonWrapper.classList.contains(`icon-button__wrapper--${size}`),
      ).toBe(true);

      otherSizes.forEach((v) => {
        expect(
          iconButtonWrapper.classList.contains(`panel__content-wrapper--${v}`),
        ).toBe(false);
      });
    });
  });
  Object.values(IconButtonVariant).forEach((variant) => {
    it(`should render IconButton with correct classname when variant is ${variant}`, () => {
      render({ variant });
      const otherVariants = Object.values(IconButtonVariant).filter(
        (v) => v != variant,
      );
      const iconButtonWrapper = screen.getByTestId('icon-button-wrapper');

      expect(
        iconButtonWrapper.classList.contains(
          `icon-button__wrapper--${variant}`,
        ),
      ).toBe(true);

      otherVariants.forEach((v) => {
        expect(
          iconButtonWrapper.classList.contains(`panel__content-wrapper--${v}`),
        ).toBe(false);
      });
    });

    it(`should render IconButton with correct classname secondary when variant is not set`, () => {
      render({});
      const otherVariants = Object.values(IconButtonVariant).filter(
        (v) => v != variant,
      );
      const iconButtonWrapper = screen.getByTestId('icon-button-wrapper');

      expect(
        iconButtonWrapper.classList.contains(
          `icon-button__wrapper--${IconButtonVariant.Secondary}`,
        ),
      ).toBe(true);

      otherVariants.forEach((v) => {
        expect(
          iconButtonWrapper.classList.contains(`panel__content-wrapper--${v}`),
        ).toBe(false);
      });
    });
  });

  it('should handle onClick event', async () => {
    const onClick = jest.fn();
    render({ onClick });
    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('should handle onClick event when clicked by enter button', async () => {
    const onClick = jest.fn();
    render({ onClick });
    await user.keyboard('{Tab}');
    await user.keyboard('{Enter}');
    expect(onClick).toHaveBeenCalled();
  });

  it('should handle onClick event when clicked by space button', async () => {
    const onClick = jest.fn();
    render({ onClick });
    const iconButton = screen.getByRole('button');
    await user.keyboard('{Tab}');
    await user.type(iconButton, '{Space}');
    expect(onClick).toHaveBeenCalled();
  });
});
