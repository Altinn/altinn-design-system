import type { AriaAttributes } from 'react';
import React from 'react';
import * as tokens from '@altinn/figma-design-tokens';

import classes from './CircularProgress.module.css';

export interface CircularProgressProps {
  value: number;
  width: number;
  strokeWidth?: number;
  aria?: AriaAttributes;
}

export const CircularProgress = ({
  value,
  width = 100,
  strokeWidth = 2,
  aria,
}: CircularProgressProps) => {
  return (
    <div
      style={{ width: `${width}px` }}
      aria-valuenow={value}
      role='progressbar'
      {...aria}
    >
      <svg
        className={classes.svg}
        viewBox='0 0 35.8 35.8'
      >
        <Circle
          stroke={tokens.ColorsBlue200}
          strokeWidth={strokeWidth}
        />
        <Circle
          strokeWidth={strokeWidth}
          stroke={tokens.ColorsBlue900}
          strokeDashoffset={100 - value}
          strokeDasharray={'100 100'}
          className={classes.circleTransition}
        />
      </svg>
    </div>
  );
};

const Circle = (props: React.SVGProps<SVGCircleElement>) => {
  return (
    <circle
      cx='50%'
      cy='50%'
      fill='none'
      r='15.9155'
      {...props}
    />
  );
};
