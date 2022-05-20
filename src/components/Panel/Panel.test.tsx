import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import type { PanelProps } from './Panel';
import { Panel, PanelVariant } from './Panel';

describe('Panel', () => {
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
        size: '3.75rem',
        variant: PanelVariant.Info,
      });
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
