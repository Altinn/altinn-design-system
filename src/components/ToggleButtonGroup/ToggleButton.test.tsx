import React from 'react';
import { render  } from '@testing-library/react';
import { tokens } from '@/DesignTokens';

import { ToggleButton } from './ToggleButton';

describe('ToggleButton', () => {
  it('calls onClick when clicked', () => {
    // Please add some non-snapshot test to verify conditional statements
    expect(<ToggleButton />).toBe(true);
  });

  it('Button has aria pressed state after being clicked', () => {
    // Please add some non-snapshot test to verify conditional statements
    expect(<ToggleButton />).toBe(true);
  });
});
