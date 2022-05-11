import React from 'react';
import cn from 'classnames';

import { ReactComponent as InfoIcon } from './info.svg';
import { ReactComponent as SuccessIcon } from './success.svg';

import { tokens } from '../../DesignTokens';

import './Panel.css';

// TODO: Should not import tokens directly in the components
import '../../DesignTokens/index.css';

export enum PanelVariant {
  Info = 'info',
  Warning = 'warning',
  Success = 'success',
}

interface RenderIconProps {
  size: number;
  variant: PanelVariant;
}

export interface PanelProps {
  title: React.ReactNode;
  children: React.ReactNode;
  renderIcon?: ({ size, variant }: RenderIconProps) => React.ReactNode;
  variant?: PanelVariant;
  showPointer?: boolean;
  showIcon?: boolean;
}

const defaultRenderIcon = ({ size, variant }: RenderIconProps) => {
  switch (variant) {
    case PanelVariant.Info:
    case PanelVariant.Warning:
      return (
        <InfoIcon width={size} height={size} data-testid='panel-icon-info' />
      );
    case PanelVariant.Success:
      return (
        <SuccessIcon
          width={size}
          height={size}
          data-testid='panel-icon-success'
        />
      );
  }
};

export const Panel = ({
  renderIcon = defaultRenderIcon,
  title,
  children,
  variant = PanelVariant.Info,
  showPointer = false,
  showIcon = true,
}: PanelProps) => {
  const iconSize = tokens.ComponentPanelSizeIconMd;

  return (
    <div
      className={cn('ads-panel', {
        'ads-panel--has-pointer': showPointer,
      })}
    >
      {showPointer && (
        <div
          data-testid='panel-pointer'
          className={cn('ads-panel__pointer', `ads-panel__pointer--${variant}`)}
        ></div>
      )}

      <div
        className={cn(
          'ads-panel__content-wrapper',
          `ads-panel__content-wrapper--${variant}`,
        )}
      >
        {showIcon && (
          <div
            data-testid='panel-icon-wrapper'
            className='ads-panel__icon-wrapper'
          >
            {renderIcon({ size: iconSize, variant })}
          </div>
        )}
        <div className='ads-panel__content'>
          <h3 className='ads-panel__header'>{title}</h3>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
