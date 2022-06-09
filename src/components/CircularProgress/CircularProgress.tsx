import React, { useId } from 'react';
import { tokens } from '@/DesignTokens';

import classes from './CircularProgress.module.css';

export interface CircularProgressProps {
  value: number;
  width?: number;
  strokeWidth?: number;
  ariaLabel?: string;
  label?: string;
}

export const CircularProgress = ({
  value,
  width = 70,
  strokeWidth = 2.5,
  ariaLabel,
  label,
}: CircularProgressProps) => {
  const id = useId();
  const ariaLabelledby = !ariaLabel && label ? id : undefined;
  return (
    <div
      style={{ width: `${width}px` }}
      aria-valuenow={value}
      role='progressbar'
      aria-labelledby={ariaLabelledby}
      aria-label={ariaLabel}
    >
      {label && (
        <div
          id={id}
          className={classes.label}
        >
          {label}
        </div>
      )}
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
