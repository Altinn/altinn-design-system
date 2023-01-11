import React, {ReactNode} from 'react';

export interface DeprecationWarningProps {
  children: ReactNode;
}

export const DeprecationWarning = ({ children }: DeprecationWarningProps) =>  (
  <div
    style={{
      backgroundColor: '#f8d7da',
      borderRadius: '0.25rem',
      color: '#721c24',
      marginBottom: '1rem',
      padding: '1rem',
    }}
  >
    <p style={{ margin: '0' }}><strong>Deprecated:</strong> {children}</p>
  </div>
);
