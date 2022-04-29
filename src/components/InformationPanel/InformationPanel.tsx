import React from 'react';

import { tokens } from '../../DesignTokens';

export enum Variant {
  Info = 'info',
  Warning = 'warning',
  Success = 'success',
}

export interface InformationPanelProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: Variant;
  showPointer?: boolean;
}

const getBackgroundColor = ({ variant }: { variant: Variant }) => {
  switch (variant) {
    case Variant.Info:
      return tokens.ComponentPanelBackgroundDefault;
    case Variant.Warning:
      return tokens.ComponentPanelBackgroundWarnning;
    case Variant.Success:
      return tokens.ComponentPanelBackgroundSuccess;
  }
};

export const InformationPanel = ({
  icon,
  children,
  variant = Variant.Info,
  showPointer = false,
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
          padding: tokens.SpaceX4,
        }}
      >
        {variant}
        <div>{icon}</div>
        <div>{children}</div>
      </div>
    </div>
  );
};
