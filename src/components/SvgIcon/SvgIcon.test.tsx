import React from 'react';
import { render, screen } from '@testing-library/react';

import { ReactComponent as MockIcon } from './Stories/success.svg';
import { SvgIcon } from './SvgIcon';

describe('SvgIcon', () => {
  it('should render an icon when given a name of an icon in NAVs icon library', () => {
    render(<SvgIcon iconName={'Add'} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
  it('should render an icon when given a svg imported as a react component', () => {
    render(<SvgIcon svgIconComponent={<MockIcon>TestIcon</MockIcon>} />);
    expect(screen.getByText('TestIcon')).toBeInTheDocument();
  });
});
