import React from 'react';

import { ReactComponent as InfoIcon } from './info.svg';
import { ReactComponent as SuccessIcon } from './success.svg';

import { tokens } from '../../DesignTokens';

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

const getBackgroundColor = ({ variant }: { variant: PanelVariant }) => {
  switch (variant) {
    case PanelVariant.Info:
      return tokens.ComponentPanelBackgroundDefault;
    case PanelVariant.Warning:
      return tokens.ComponentPanelBackgroundWarning;
    case PanelVariant.Success:
      return tokens.ComponentPanelBackgroundSuccess;
  }
};

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
  const backgroundColor = getBackgroundColor({ variant });
  const pointerSize = tokens.SpaceX2;
  // const iconSize = tokens.SizeIconMedium; // Should use this token, but currently it is 60rem which is incorrect
  const iconSize = 60;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: showPointer ? pointerSize / 2 + pointerSize / 4 : 0,
      }}
    >
      {showPointer && (
        <div
          data-testid='panel-pointer'
          style={{
            position: 'absolute',
            transform: 'rotate(45deg)',
            transformOrigin: 'bottom',
            zIndex: -1,
            backgroundColor,
            width: pointerSize,
            height: pointerSize,
            top: 2,
            left: 106,
          }}
        ></div>
      )}

      <div
        style={{
          display: 'flex',
          gap: tokens.PanelPaddingGapHorizontalDefault,
          backgroundColor,
          paddingTop: tokens.PanelPaddingTopDefault,
          paddingRight: tokens.PanelPaddingRightDefault,
          paddingBottom: tokens.PanelPaddingBottomDefault,
          paddingLeft: tokens.PanelPaddingLeftDefault,
        }}
      >
        {showIcon && (
          <div
            data-testid='panel-icon-wrapper'
            style={{ flex: 'none', display: 'flex' }}
          >
            {renderIcon({ size: iconSize, variant })}
          </div>
        )}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: tokens.PanelTextAreaGapVerticalDefault,
          }}
        >
          <h3 style={{ margin: 0 }}>{title}</h3>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
