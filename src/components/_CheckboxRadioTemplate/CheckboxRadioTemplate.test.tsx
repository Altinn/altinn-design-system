import assert from 'assert';

import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import type { CheckboxRadioTemplateProps } from '@/components/_CheckboxRadioTemplate/CheckboxRadioTemplate';
import {
  CheckboxRadioTemplate,
  CheckboxRadioTemplateSize,
} from '@/components/_CheckboxRadioTemplate/CheckboxRadioTemplate';

// Test data:
const visibleBoxTestId = 'visible-box-test';
const visibleBox = <span data-testid={visibleBoxTestId} />;
const size = CheckboxRadioTemplateSize.Small;
const type = 'checkbox';
const onChange = jest.fn();
const defaultProps: CheckboxRadioTemplateProps = {
  size,
  type,
  onChange,
  children: visibleBox,
};

describe('CheckboxRadioTemplate', () => {
  it('Renders template element', () => {
    expect(renderAndGetWrapper()).toBeInTheDocument();
  });

  it('Renders checkbox if type is "checkbox"', () => {
    render({ type: 'checkbox' });
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('Renders radio button if type is "radio"', () => {
    render({ type: 'radio' });
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('Renders children', () => {
    render({ children: visibleBox });
    expect(screen.getByTestId(visibleBoxTestId)).toBeInTheDocument();
  });

  it('Renders label if given', () => {
    const label = 'Lorem ipsum';
    render({ label });
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('Renders description if given', () => {
    const description = 'Lorem ipsum dolor sit amet.';
    render({ description });
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('Renders with "xsmall" class if size is set to "Xsmall"', () => {
    const size = CheckboxRadioTemplateSize.Xsmall;
    const wrapper = renderAndGetWrapper({ size });
    expect(wrapper).toHaveClass('altinn-template--xsmall');
  });

  it('Renders with "small" class if size is set to "Small"', () => {
    const size = CheckboxRadioTemplateSize.Small;
    const wrapper = renderAndGetWrapper({ size });
    expect(wrapper).toHaveClass('altinn-template--small');
  });

  it('Does not render with "disabled" class by default', () => {
    const wrapper = renderAndGetWrapper();
    expect(wrapper).not.toHaveClass('altinn-template--disabled');
  });

  it('Renders with "disabled" class if the "disabled" property is true', () => {
    const wrapper = renderAndGetWrapper({ disabled: true });
    expect(wrapper).toHaveClass('altinn-template--disabled');
  });

  it('Does not render with "disabled" class if the "disabled" property is false', () => {
    const wrapper = renderAndGetWrapper({ disabled: false });
    expect(wrapper).not.toHaveClass('altinn-template--disabled');
  });
});

const render = (props: Partial<CheckboxRadioTemplateProps> = {}) => {
  const allProps = { ...defaultProps, ...props };
  return renderRtl(
    <CheckboxRadioTemplate {...allProps}>
      {allProps.children}
    </CheckboxRadioTemplate>,
  );
};

const renderAndGetWrapper = (
  props: Partial<CheckboxRadioTemplateProps> = {},
): Element => {
  const { container } = render(props);
  const wrapper = container.querySelector('.altinn-template');
  assert(wrapper !== null);
  return wrapper;
};
