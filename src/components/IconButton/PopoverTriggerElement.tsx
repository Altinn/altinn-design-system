import React, { forwardRef } from 'react';

export interface PopoverTriggerElementProps {
  children?: React.ReactNode;
}

export const PopoverTriggerElement = forwardRef(
  (props: PopoverTriggerElementProps, ref: React.LegacyRef<HTMLDivElement>) => {
    const { children, ...rest }: PopoverTriggerElementProps = props;
    return (
      <div
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
PopoverTriggerElement.displayName = 'PopoverTriggerElement';
