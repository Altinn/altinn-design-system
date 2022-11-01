import React from 'react';
import { render, screen } from '@testing-library/react';

import { SvgIcon } from './SvgIcon';

describe('SvgIcon', () => {
  it('should render an icon when given a name of an icon in NAVs icon library', () => {
    render(<SvgIcon name={'Success'} />);
    expect(<SvgIcon name={'Success'} />).toBe(true);
  });
});
