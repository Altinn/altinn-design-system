import React from 'react';

import { ReactComponent as InfoIcon } from './info.svg';

import { tokens } from '../../DesignTokens';

export enum PanelVariant {
  Info = 'info',
  Warning = 'warning',
  Success = 'success',
}

interface IRenderIconProps {
  size: number;
}

export interface PanelProps {
  title: React.ReactNode;
  children: React.ReactNode;
  renderIcon?: ({ size }: IRenderIconProps) => React.ReactNode;
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

const defaultRenderIcon = ({ size }: IRenderIconProps) => {
  return (
    <div style={{ flex: 'none', display: 'flex' }}>
      <InfoIcon width={size} height={size} />
    </div>
  );
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
          style={{
            position: 'absolute',
            transform: 'rotate(45deg)',
            backgroundColor,
            width: pointerSize,
            height: pointerSize,
            top: pointerSize / 4,
            left: tokens.SpaceX8,
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
        {showIcon && renderIcon({ size: iconSize })}
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
