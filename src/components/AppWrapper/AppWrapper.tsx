import React from 'react';

import '@altinn/figma-design-tokens/dist/tokens.css';
import './AppWrapper.module.css';

export interface AppWrapperProps {
  children?: React.ReactNode;
}

export const AppWrapper = ({ children }: AppWrapperProps) => {
  return <div>{children}</div>;
};
