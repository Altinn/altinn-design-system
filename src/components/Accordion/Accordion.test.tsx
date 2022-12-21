import React from 'react';
import userEvent from '@testing-library/user-event';
import { render as renderRtl, screen } from '@testing-library/react';

import type { AccordionProps } from './Accordion';
import { Accordion } from './Accordion';
import { AccordionContent } from './AccordionContent';
import { AccordionIconVariant } from './Context';
import { AccordionHeader } from './AccordionHeader';

const render = (props: Partial<AccordionProps> = {}) => {
  const allProps = {
    children: (
      <>
        <AccordionHeader>AccordionHeader</AccordionHeader>
        <AccordionContent>AccordionContent</AccordionContent>
      </>
    ),
    onClick: jest.fn(),
    open: true,
    ...props,
  };
  renderRtl(<Accordion {...allProps} />);
};

const user = userEvent.setup();

describe('Accordion', () => {
  it('should call handleClick when AccordionHeader is clicked', async () => {
    const handleClick = jest.fn();
    render({ onClick: handleClick });

    await user.click(screen.getByRole('button', { name: 'AccordionHeader' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should have aria-expanded=true when open=true', () => {
    render({ open: true });
    expect(
      screen.getByRole('button', { name: 'AccordionHeader', expanded: true }),
    ).toBeInTheDocument();
  });

  it('should have aria-expanded=false when open=false', () => {
    render({ open: false });

    expect(
      screen.getByRole('button', { name: 'AccordionHeader', expanded: false }),
    ).toBeInTheDocument();
  });

  it('should call handleClick when AccordionHeader is clicked using key press Space', async () => {
    const handleClick = jest.fn();
    render({ onClick: handleClick });

    const accordionHeader = screen.getByRole('button', {
      name: 'AccordionHeader',
    });
    await user.type(accordionHeader, '{Space}');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should call handleClick when AccordionHeader is clicked using key press Enter', async () => {
    const handleClick = jest.fn();
    render({ onClick: handleClick });

    await user.keyboard('{Tab}');
    await user.keyboard('{Enter}');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  Object.values(AccordionIconVariant).forEach((iconVariant) => {
    it(`should show icon variant ${iconVariant} when icon variant is set to ${iconVariant}`, () => {
      render({ iconVariant });

      const otherVariants = Object.values(AccordionIconVariant).filter(
        (v) => v !== iconVariant,
      );

      expect(screen.getByTestId(iconVariant)).toBeInTheDocument();
      otherVariants.forEach((v) => {
        expect(screen.queryByTestId(v)).not.toBeInTheDocument();
      });
    });
  });
});
