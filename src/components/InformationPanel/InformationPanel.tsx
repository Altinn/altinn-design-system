import React from 'react';

import { tokens } from '../../DesignTokens';

export enum InformationPanelVariant {
  Info = 'info',
  Warning = 'warning',
  Success = 'success',
}

export interface InformationPanelProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: InformationPanelVariant;
  showPointer?: boolean;
  showIcon?: boolean;
}

const getBackgroundColor = ({
  variant,
}: {
  variant: InformationPanelVariant;
}) => {
  switch (variant) {
    case InformationPanelVariant.Info:
      return tokens.ComponentPanelBackgroundDefault;
    case InformationPanelVariant.Warning:
      return tokens.ComponentPanelBackgroundWarning;
    case InformationPanelVariant.Success:
      return tokens.ComponentPanelBackgroundSuccess;
  }
};

export const InformationPanel = ({
  icon,
  children,
  variant = InformationPanelVariant.Info,
  showPointer = false,
  showIcon = true,
}: InformationPanelProps) => {
  const backgroundColor = getBackgroundColor({ variant });
  const pointerSize = tokens.SpaceX2;

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
          backgroundColor,
          paddingTop: tokens.PanelPaddingTopDefault,
          paddingRight: tokens.PanelPaddingRightDefault,
          paddingBottom: tokens.PanelPaddingBottomDefault,
          paddingLeft: tokens.PanelPaddingLeftDefault,
        }}
      >
        {showIcon && <div>{icon}</div>}
        <div>{children}</div>
      </div>
    </div>
  );
};
