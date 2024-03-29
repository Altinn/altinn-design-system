import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import { mockMediaQuery } from '@test/testUtils';
import { tokens } from '@/DesignTokens';

import type { PanelProps } from './Panel';
import { Panel, PanelVariant } from './Panel';

const mediaQueryBreakPoint = 500;
const { setScreenWidth } = mockMediaQuery(mediaQueryBreakPoint);

describe('Panel', () => {
  beforeEach(() => {
    setScreenWidth(mediaQueryBreakPoint + 100);
  });

  Object.values(PanelVariant).forEach((variant) => {
    it(`should render panel with correct classname when variant is ${variant}`, () => {
      render({ variant });
      const otherVariants = Object.values(PanelVariant).filter(
        (v) => v !== variant,
      );

      const pointer = screen.getByTestId('panel-content-wrapper');

      expect(
        pointer.classList.contains(`panel__content-wrapper--${variant}`),
      ).toBe(true);
      otherVariants.forEach((v) => {
        expect(pointer.classList.contains(`panel__content-wrapper--${v}`)).toBe(
          false,
        );
      });
    });
  });

  describe('title', () => {
    it('should show title when "title" prop is set', () => {
      render({ title: 'Hello from Panel' });

      expect(
        screen.getByRole('heading', {
          name: /hello from panel/i,
        }),
      ).toBeInTheDocument();
    });

    it('should not show title when "title" prop is not set', () => {
      render({ title: undefined });

      expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    });
  });

  describe('Pointer', () => {
    it('should show pointer when "showPointer" is true', () => {
      render({ showPointer: true });
      expect(screen.getByTestId('panel-pointer')).toBeInTheDocument();
    });

    it('should not show pointer when "showPointer" is not set', () => {
      render();
      expect(screen.queryByTestId('panel-pointer')).not.toBeInTheDocument();
    });

    it('should not show pointer when "showPointer" is false', () => {
      render({ showPointer: false });
      expect(screen.queryByTestId('panel-pointer')).not.toBeInTheDocument();
    });

    Object.values(PanelVariant).forEach((variant) => {
      it(`should render pointer with correct classname when variant is ${variant}`, () => {
        render({ showPointer: true, variant });
        const otherVariants = Object.values(PanelVariant).filter(
          (v) => v !== variant,
        );

        const pointer = screen.getByTestId('panel-pointer');

        expect(pointer.classList.contains(`panel__pointer--${variant}`)).toBe(
          true,
        );
        otherVariants.forEach((v) => {
          expect(pointer.classList.contains(`panel__pointer--${v}`)).toBe(
            false,
          );
        });
      });
    });
  });

  describe('Icon', () => {
    it('should show icon when "showIcon" is true', () => {
      render({ showIcon: true });
      expect(screen.getByTestId('panel-icon-wrapper')).toBeInTheDocument();
    });

    it('should show icon when "showIcon" is not set', () => {
      render();
      expect(screen.getByTestId('panel-icon-wrapper')).toBeInTheDocument();
    });

    it('should not show icon when "showIcon" is false', () => {
      render({ showIcon: false });
      expect(
        screen.queryByTestId('panel-icon-wrapper'),
      ).not.toBeInTheDocument();
    });

    it('should show info icon when variant is not set', () => {
      render();
      expect(screen.getByTestId('panel-icon-wrapper')).toBeInTheDocument();
      expect(screen.getByTestId('panel-icon-info')).toBeInTheDocument();
      expect(
        screen.queryByTestId('panel-icon-success'),
      ).not.toBeInTheDocument();
    });

    it('should show info icon when variant is info', () => {
      render({ variant: PanelVariant.Info });
      expect(screen.getByTestId('panel-icon-wrapper')).toBeInTheDocument();
      expect(screen.getByTestId('panel-icon-info')).toBeInTheDocument();
      expect(
        screen.queryByTestId('panel-icon-success'),
      ).not.toBeInTheDocument();
    });

    it('should show info icon when variant is warning', () => {
      render({ variant: PanelVariant.Warning });
      expect(screen.getByTestId('panel-icon-wrapper')).toBeInTheDocument();
      expect(screen.getByTestId('panel-icon-info')).toBeInTheDocument();
      expect(
        screen.queryByTestId('panel-icon-success'),
      ).not.toBeInTheDocument();
    });

    it('should show info icon when variant is error', () => {
      render({ variant: PanelVariant.Error });
      expect(screen.getByTestId('panel-icon-wrapper')).toBeInTheDocument();
      expect(screen.getByTestId('panel-icon-info')).toBeInTheDocument();
      expect(
        screen.queryByTestId('panel-icon-success'),
      ).not.toBeInTheDocument();
    });

    it('should show success icon when variant is success', () => {
      render({ variant: PanelVariant.Success });
      expect(screen.getByTestId('panel-icon-wrapper')).toBeInTheDocument();
      expect(screen.getByTestId('panel-icon-success')).toBeInTheDocument();
      expect(screen.queryByTestId('panel-icon-info')).not.toBeInTheDocument();
    });

    it('should allow overriding icon with renderIcon callback', () => {
      const renderIcon = () => <div data-testid='panel-custom-icon' />;
      render({ renderIcon });

      expect(screen.getByTestId('panel-icon-wrapper')).toBeInTheDocument();
      expect(screen.getByTestId('panel-custom-icon')).toBeInTheDocument();
      expect(screen.queryByTestId('panel-icon-info')).not.toBeInTheDocument();
      expect(
        screen.queryByTestId('panel-icon-success'),
      ).not.toBeInTheDocument();
    });

    it('should pass size and variant to renderIcon callback', () => {
      const renderIcon = jest.fn();
      render({ renderIcon });

      expect(renderIcon).toHaveBeenCalledWith({
        size: tokens.ComponentPanelSizeIconMd,
        variant: PanelVariant.Info,
      });
    });

    it('should pass smaller size and variant to renderIcon callback when viewport is small', () => {
      setScreenWidth(mediaQueryBreakPoint - 100);

      const renderIcon = jest.fn();
      render({ renderIcon });

      expect(renderIcon).toHaveBeenCalledWith({
        size: tokens.ComponentPanelSizeIconXs,
        variant: PanelVariant.Info,
      });
    });

    it('should pass smaller size and variant to renderIcon callback when viewport is big and forceMobileLayout is true', () => {
      const renderIcon = jest.fn();
      render({ renderIcon, forceMobileLayout: true });

      expect(renderIcon).toHaveBeenCalledWith({
        size: tokens.ComponentPanelSizeIconXs,
        variant: PanelVariant.Info,
      });
    });

    it('should allow overriding panel pointer with renderArrow callback', () => {
      const renderArrow = () => <div data-testid='panel-arrow' />;
      render({ renderArrow, showPointer: true });

      expect(screen.getByTestId('panel-arrow')).toBeInTheDocument();
      expect(screen.queryByTestId('panel-pointer')).not.toBeInTheDocument();
    });
  });
});

const render = (props: Partial<PanelProps> = {}) => {
  const allProps = {
    title: 'Panel title',
    children: <div>Panel content</div>,
    ...props,
  };

  renderRtl(<Panel {...allProps} />);
};
