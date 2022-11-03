import type { SVGAttributes } from 'react';
import React, { cloneElement } from 'react';
import * as Icons from '@navikt/ds-icons';

export type IconKey = keyof typeof Icons;

export type IconConditionalProps =
  | {
      iconName?: IconKey;
      svgIconComponent?: never;
    }
  | {
      iconName?: never;
      svgIconComponent?: JSX.Element;
    };

export type SvgIconProps = IconConditionalProps & SVGAttributes<SVGElement>;

export const SvgIcon = ({
  iconName,
  svgIconComponent,
  ...rest
}: SvgIconProps) => {
  if (iconName) {
    // eslint-disable-next-line import/namespace
    const ImportedIcon = Icons[iconName];
    if (ImportedIcon) {
      return <ImportedIcon {...rest} />;
    }
  } else if (svgIconComponent) {
    return cloneElement(svgIconComponent, { ...rest });
  }
  return null;
};
