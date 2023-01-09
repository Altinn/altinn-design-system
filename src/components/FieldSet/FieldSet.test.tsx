import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import type { FieldSetProps } from './FieldSet';
import { FieldSet, FieldSetSize } from './FieldSet';

const defaultProps: FieldSetProps = {
  children: 'Some content.',
};

describe('FieldSet', () => {
  it('Should display children', () => {
    render();
    expect(screen.getByText(defaultProps.children as string)).toBeDefined();
  });

  it('Should not display legend by default', () => {
    const { container } = render();
    expect(container.querySelector('legend')).toBeFalsy();
  });

  it('Should display legend if given', () => {
    const legend = 'Lorem ipsum';
    const { container } = render({ legend });
    expect(container.querySelector('legend')).toHaveTextContent(legend);
  });

  it('Should not display description by default', () => {
    const { container } = render();
    expect(container.querySelector('.field-set__description')).toBeFalsy();
  });

  it('Should display description if given', () => {
    const description = 'Lorem ipsum dolor sit amet.';
    const { container } = render({ description });
    expect(
      container.querySelector('.field-set__description'),
    ).toHaveTextContent(description);
  });

  it('Should not display error message by default', () => {
    const { container } = render();
    expect(container.querySelector('.field-set__error-message')).toBeFalsy();
  });

  it('Should display error message if given', () => {
    const error = 'Something is wrong.';
    const { container } = render({ error });
    expect(
      container.querySelector('.field-set__error-message'),
    ).toHaveTextContent(error);
  });

  it('Should have class "field-set--small" by default', () => {
    render();
    expect(screen.getByRole('group')).toHaveClass('field-set--small');
    expect(screen.getByRole('group')).not.toHaveClass('field-set--xsmall');
  });

  it('Should have class "field-set--small" if the "size" property is set to "small"', () => {
    render({ size: FieldSetSize.Small });
    expect(screen.getByRole('group')).toHaveClass('field-set--small');
    expect(screen.getByRole('group')).not.toHaveClass('field-set--xsmall');
  });

  it('Should have class "field-set--xsmall" if the "size" property is set to "xsmall"', () => {
    render({ size: FieldSetSize.Xsmall });
    expect(screen.getByRole('group')).toHaveClass('field-set--xsmall');
    expect(screen.getByRole('group')).not.toHaveClass('field-set--small');
  });

  it('Should be enabled by default', () => {
    render();
    expect(screen.getByRole('group')).toBeEnabled();
  });

  it('Should be disabled if the "disabled" property is true', () => {
    render({ disabled: true });
    expect(screen.getByRole('group')).toBeDisabled();
  });

  it('Should be enabled if the "disabled" property is false', () => {
    render({ disabled: false });
    expect(screen.getByRole('group')).toBeEnabled();
  });

  it('Displays legend and description if they are React nodes', () => {
    const legendText = 'Legend';
    const descriptionText = 'Description';
    render({
      legend: <span>{legendText}</span>,
      description: <span>{descriptionText}</span>,
    });
    expect(screen.getByText(legendText)).toBeInTheDocument();
    expect(screen.getByText(descriptionText)).toBeInTheDocument();
  });
});

const render = (props: Partial<FieldSetProps> = {}) => {
  const allProps = { ...defaultProps, ...props };
  return renderRtl(<FieldSet {...allProps}>{allProps.children}</FieldSet>);
};
