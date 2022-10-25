import { render as renderRtl, screen } from '@testing-library/react';
import React from 'react';

import type { NumericTextProps } from './NumericText';
import { NumericText } from './NumericText';

describe('NumericText', () => {
  it('should render as NumericFormat if format is of type NumericFormatProps', () => {
    render({
      text: '12345.6789',
      format: {
        prefix: 'NOK ',
        thousandSeparator: ' ',
        decimalSeparator: ',',
        decimalScale: 2,
      },
    });

    expect(screen.getByText('NOK 12 345,67')).toBeInTheDocument();
  });

  it('should render as PatternFormat if format is of type PatternFormatProps', () => {
    render({
      text: '98765432',
      format: {
        format: '+47 ### ## ###',
      },
    });

    expect(screen.getByText('+47 987 65 432')).toBeInTheDocument();
  });

  it('should render as plain text if format is undefined', () => {
    render({
      text: '12345.6789',
    });

    expect(screen.getByText('12345.6789')).toBeInTheDocument();
  });
});

const render = (props: Partial<NumericTextProps> = {}) => {
  const allProps = {
    id: 'id',
    ...props,
  } as NumericTextProps;

  return renderRtl(<NumericText {...allProps} />);
};
