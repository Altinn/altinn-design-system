import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import type { IconProps } from './Icon';
import { Icon } from './Icon';
import { IconVariant } from './utils';

describe('Icon', () => {
  it('should return error icon when variant is Error', () => {
    render({ variant: IconVariant.Error });
    expect(screen.getByTestId('input-icon-error')).toBeInTheDocument();
  });

  [undefined, IconVariant.None].forEach((variant) => {
    it(`should return null when variant is ${variant}`, () => {
      const { container } = render({ variant });
      expect(container.firstChild).toBeNull();
    });
  });
});

const render = (props: Partial<IconProps> = {}) => {
  const allProps = {
    ...props,
  };

  return renderRtl(<Icon {...allProps} />);
};
