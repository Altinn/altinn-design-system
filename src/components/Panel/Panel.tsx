import React from 'react';
import cn from 'classnames';
import { useMediaQuery } from '@react-hookz/web';

import { tokens } from '@/DesignTokens';

import { ReactComponent as InfoIcon } from './info.svg';
import { ReactComponent as SuccessIcon } from './success.svg';
import classes from './Panel.module.css';

export enum PanelVariant {
  Success = 'success',
  Info = 'info',
  Warning = 'warning',
  Error = 'error',
}

interface RenderIconProps {
  size: string;
  variant: PanelVariant;
}

interface UseMobileLayoutProps {
  forceMobileLayout?: boolean;
}
export interface PanelProps extends UseMobileLayoutProps {
  title?: React.ReactNode;
  children: React.ReactNode;
  renderIcon?: ({ size, variant }: RenderIconProps) => React.ReactNode;
  variant?: PanelVariant;
  showPointer?: boolean;
  showIcon?: boolean;
  showAsPopover?: boolean;
}

const defaultRenderIcon = ({ size, variant }: RenderIconProps) => {
  switch (variant) {
    case PanelVariant.Info:
    case PanelVariant.Error:
    case PanelVariant.Warning:
      return (
        <InfoIcon
          style={{ width: size, height: size }}
          data-testid='panel-icon-info'
        />
      );
    case PanelVariant.Success:
      return (
        <SuccessIcon
          style={{ width: size, height: size }}
          data-testid='panel-icon-success'
        />
      );
  }
};

const useMobileLayout = ({ forceMobileLayout }: UseMobileLayoutProps) => {
  const matchesMobileQuery = useMediaQuery(
    `(max-width: ${tokens.BreakpointsSm})`,
  );

  if (forceMobileLayout) {
    return true;
  }

  return matchesMobileQuery;
};

export const Panel = ({
  renderIcon = defaultRenderIcon,
  title,
  children,
  variant = PanelVariant.Info,
  showPointer = false,
  showIcon = true,
  forceMobileLayout = false,
  showAsPopover = false,
}: PanelProps) => {
  const isMobileLayout = useMobileLayout({ forceMobileLayout });

  const iconSize = isMobileLayout
    ? tokens.ComponentPanelSizeIconXs
    : tokens.ComponentPanelSizeIconMd;

  return (
    <div
      className={cn(classes.panel, {
        [classes['panel--has-pointer']]: showPointer || !showAsPopover,
        [classes['panel--mobile-layout']]: isMobileLayout,
      })}
    >
      {(showPointer || !showAsPopover) && (
        <div
          data-testid='panel-pointer'
          className={cn(
            classes.panel__pointer,
            classes[`panel__pointer--${variant}`],
          )}
        ></div>
      )}

      <div
        data-testid='panel-content-wrapper'
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
          {title && <h2 className={classes.panel__header}>{title}</h2>}
          <div className={classes.panel__body}>{children}</div>
        </div>
      </div>
    </div>
  );
};
