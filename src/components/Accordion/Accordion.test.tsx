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
  it('should call handleClick with open=true when AccordionHeader is clicked', async () => {
    const handleClick = jest.fn();
    render({ onClick: handleClick, open: true });

    await user.click(screen.getByRole('button', { name: 'AccordionHeader' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe('Accordion', () => {
  it('should call handleClick with open=false when AccordionHeader is clicked', async () => {
    const handleClick = jest.fn();
    render({ onClick: handleClick, open: false });

    await user.click(screen.getByRole('button', { name: 'AccordionHeader' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

describe('Accordion', () => {
  it('should have aria-expanded=true when clicked and open=true', async () => {
    const handleClick = jest.fn();
    render({ onClick: handleClick });

    await user.click(screen.getByRole('button', { name: 'AccordionHeader' }));
    expect(
      screen.getByRole('button', { name: 'AccordionHeader', expanded: true }),
    ).toBeInTheDocument();
  });
});

describe('Accordion', () => {
  it('should have aria-expanded=false when clicked and open=false', async () => {
    const handleClick = jest.fn();
    render({ onClick: handleClick, open: false });

    await user.click(screen.getByRole('button', { name: 'AccordionHeader' }));
    expect(
      screen.getByRole('button', { name: 'AccordionHeader', expanded: false }),
    ).toBeInTheDocument();
  });
});

describe('Accordion', () => {
  it('should have aria-expanded=true when accordion is expanded using key press ', async () => {
    const handleClick = jest.fn();
    render({ onClick: handleClick });

    const AccordionHeader = screen.getByRole('button', {
      name: 'AccordionHeader',
    });
    await user.type(AccordionHeader, '{Space}');
    expect(
      screen.getByRole('button', { name: 'AccordionHeader', expanded: true }),
    ).toBeInTheDocument();
  });
});

describe('Accordion', () => {
  it('should have aria-expanded=true when accordion is expanded using key press ', async () => {
    const handleClick = jest.fn();
    render({ onClick: handleClick, open: false });

    const AccordionHeader = screen.getByRole('button', {
      name: 'AccordionHeader',
    });
    await user.type(AccordionHeader, '{Space}');
    expect(
      screen.getByRole('button', { name: 'AccordionHeader', expanded: false }),
    ).toBeInTheDocument();
  });
});
