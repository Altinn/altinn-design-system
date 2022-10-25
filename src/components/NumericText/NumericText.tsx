import type { HTMLProps } from 'react';
import React from 'react';
import type {
  NumericFormatProps,
  PatternFormatProps,
} from 'react-number-format';

import { formatNumericText } from '@/utils';

export interface NumericTextProps extends HTMLProps<HTMLSpanElement> {
  text: string;
  format?: NumericFormatProps | PatternFormatProps;
}

export const NumericText = ({
  text,
  format,
  id,
  ...rest
}: NumericTextProps) => (
  <span
    {...rest}
    data-testid={`${id}-formatted-numeric-text`}
  >
    {formatNumericText(text, format)}
  </span>
);
