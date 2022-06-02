import React from 'react';
import cn from 'classnames';
import { useMediaQuery } from '@react-hookz/web';
import * as tokens from '@altinn/figma-design-tokens';
// TODO: Should not import tokens directly in the components
import '@altinn/figma-design-tokens/dist/tokens.css';

import { ReactComponent as InfoIcon } from './info.svg';
import { ReactComponent as SuccessIcon } from './success.svg';
import classes from './Panel.module.css';

export enum PanelVariant {
  Info = 'info',
  Warning = 'warning',
  Success = 'success',
}

interface RenderIconProps {
  size: string;
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
        <InfoIcon
          width={size}
          height={size}
          data-testid='panel-icon-info'
        />
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
  const isMobile = useMediaQuery(`(max-width: ${tokens.BreakpointsSm})`);
  const size = isMobile
    ? tokens.ComponentPanelSizeIconXs
    : tokens.ComponentPanelSizeIconMd;

  // TODO: remove this workaround
  // We need this temporary font size factor to make sure the icon is rendered correctly
  // Because of font-size: 62.5% set on html/body in the old design system
  const fontSizeFactor = 1.6;

  const iconSize = `calc(${size} * ${fontSizeFactor})`;

  return (
    <div
      className={cn(classes.panel, {
        [classes['panel--has-pointer']]: showPointer,
      })}
    >
      {showPointer && (
        <div
          data-testid='panel-pointer'
          className={cn(
            classes.panel__pointer,
            classes[`panel__pointer--${variant}`],
          )}
        ></div>
      )}

      <div
        className={cn(
          classes['panel__content-wrapper'],
          classes[`panel__content-wrapper--${variant}`],
        )}
      >
        {showIcon && (
          <div
            data-testid='panel-icon-wrapper'
            className={classes['panel__icon-wrapper']}
          >
            {renderIcon({ size: iconSize, variant })}
          </div>
        )}
        <div className={classes.panel__content}>
          <h3 className={classes.panel__header}>{title}</h3>
          <div className={classes.panel__body}>{children}</div>
        </div>
      </div>
    </div>
  );
};
