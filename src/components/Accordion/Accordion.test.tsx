import React from 'react';
import userEvent from '@testing-library/user-event';
import { render as renderRtl, screen } from '@testing-library/react';

import type { AccordionProps } from './Accordion';
import { Accordion } from './Accordion';
import { AccordionHeader } from './AccordionHeader';
import { AccordionContent } from './AccordionContent';

const render = (props: Partial<AccordionProps> = {})=>{
  const allProps = {
    children: (
      <>
        <AccordionHeader>AccordionHeader</AccordionHeader>
        <AccordionContent>AccordionContent</AccordionContent>
      </>
    ),
    onChange: jest.fn(),
    open: true,
    ...props,
  };
  renderRtl(<Accordion {...allProps} />);
};

const user = userEvent.setup();

describe('Accordion', () => {
  it('should call handleChange with correct open=true when AccordionHeader is clicked', async () => {
    const handleChange = jest.fn();
    render({ onChange: handleChange });
    await user.click(screen.getByRole('button', { name: 'AccordionHeader' }));
    expect(handleChange).toHaveBeenCalledWith({ open: true });
  });
});

describe('Accordion', () => {
  it('should call handleChange with open=false when AccordionHeader is clicked', async () => {
    const handleChange = jest.fn();
    render({ onChange: handleChange });

    await user.click(screen.getByRole('button', { name: 'AccordionHeader' }));
    expect(handleChange).toHaveBeenCalledWith({ open: true });
  });
});

describe('Accordion', () => {
  it('should have aria-expanded=true when clicked and open=true', async () => {
    const handleChange = jest.fn();
    render({ onChange: handleChange, open: true });

    await user.click(screen.getByRole('button', { name: 'AccordionHeader' }));
    expect(
      screen.getByRole('button', { name: 'Left', pressed: true }),
    ).toBeInTheDocument();
  });
});

describe('Accordion', () => {
  it('should have aria-expanded=false when clicked and open=false', async () => {
    const handleChange = jest.fn();
    render({ onChange: handleChange, open: false });

    await user.click(screen.getByRole('button', { name: 'AccordionHeader' }));
    expect(
      screen.getByRole('button', { name: 'Left', pressed: false }),
    ).toBeInTheDocument();
  });
});
