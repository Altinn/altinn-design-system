import React from 'react';
import userEvent from '@testing-library/user-event';
import { render as renderRtl, screen } from '@testing-library/react';

import type { AccordionProps } from './Accordion';
import { Accordion } from './Accordion';
import { AccordionHeader } from './AccordionHeader';
import { AccordionContent } from './AccordionContent';

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

  it('should have aria-expanded=true when open=true', async () => {
    const handleClick = jest.fn();
    render({ onClick: handleClick, open: false });

    expect(
      screen.getByRole('button', { name: 'AccordionHeader', expanded: false }),
    ).toBeInTheDocument();
  });

  it('should call handleClick when AccordionHeader is clicked using key press space', async () => {
    const handleClick = jest.fn();
    render({ onClick: handleClick });

    const AccordionHeader = screen.getByRole('button', {
      name: 'AccordionHeader',
    });
    await user.type(AccordionHeader, '{Space}');
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
