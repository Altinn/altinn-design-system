import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import { Accordion } from './Accordion';
import { AccordionContent } from './AccordionContent';
import type { AccordionHeaderProps } from './AccordionHeader';
import { AccordionHeader } from './AccordionHeader';

const render = (props: Partial<AccordionHeaderProps> = {}) => {
  const allProps = {
    children: 'AccordionHeader',
    ...props,
  };
  renderRtl(
    <Accordion
      onClick={jest.fn()}
      open={false}
    >
      <AccordionHeader {...allProps} />
      <AccordionContent>AccordionContent</AccordionContent>
    </Accordion>,
  );
};

describe('AccordionHeader', () => {
  it('should show subtitle when "subtitle" prop is set', () => {
    render({ subtitle: 'Subtitle is here' });

    expect(screen.getByText('Subtitle is here')).toBeInTheDocument();
  });

  it('should not show subtitle when "subtitle" prop is not set', () => {
    render({ subtitle: undefined });

    expect(
      screen.queryByTestId('accordion-header-subtitle'),
    ).not.toBeInTheDocument();
  });
});
