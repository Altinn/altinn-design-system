import assert from 'assert';

import React from 'react';
import { act, render as renderRtl, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { RadioButton } from '@/components';
import type { RadioButtonProps } from '@/components/RadioButton/RadioButton';
import { RadioButtonSize } from '@/components/RadioButton/RadioButton';

const user = userEvent.setup();

// Test data
const onChange = jest.fn();
const name = 'radio-ga-ga';
const value = 'radio-goo-goo';
const defaultProps: RadioButtonProps = {
  onChange,
  name,
  value,
};

describe('RadioButton', () => {
  afterEach(() => jest.resetAllMocks());

  it('Renders a radio button', () => {
    render();
    expect(screen.getByRole('radio')).toBeInTheDocument();
  });

  it('Is not checked by default', () => {
    const wrapper = renderAndGetWrapper();
    expect(screen.getByRole('radio')).not.toBeChecked();
    expect(wrapper).not.toHaveClass('radio--checked');
  });

  it('Is checked if the "checked" prop is true', () => {
    const wrapper = renderAndGetWrapper({ checked: true });
    expect(screen.getByRole('radio')).toBeChecked();
    expect(wrapper).toHaveClass('radio--checked');
  });

  it('Is not checked if the "checked" prop is false', () => {
    const wrapper = renderAndGetWrapper({ checked: false });
    expect(screen.getByRole('radio')).not.toBeChecked();
    expect(wrapper).not.toHaveClass('radio--checked');
  });

  it('Calls onChange when user clicks', async () => {
    const wrapper = renderAndGetWrapper();
    await act(() => user.click(wrapper));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('Does not call onChange when user clicks and the radio button is disabled', async () => {
    const wrapper = renderAndGetWrapper({ disabled: true });
    await act(() => user.click(wrapper));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('Displays label text', () => {
    const label = 'All we hear is radio ga ga';
    render({ label });
    expect(screen.getByText(label)).toBeDefined();
  });

  it('Does not display label text, but still makes it accessible, when hideLabel is true', () => {
    const label = 'All we hear is radio ga ga';
    render({ hideLabel: true, label });
    expect(screen.queryByText(label)).toBeFalsy();
    expect(screen.getByLabelText(label)).toBeTruthy();
  });

  it('Renders radio button with given radioId', () => {
    const radioId = 'radio-whats-new';
    render({ radioId });
    expect(screen.getByRole('radio').id).toEqual(radioId);
  });

  it('Renders radio button with given name', () => {
    render();
    expect(screen.getByRole('radio').getAttribute('name')).toEqual(name);
  });

  it('Displays description if given', () => {
    const description = 'Radio, someone still loves you';
    render({ description });
    expect(screen.getByText(description)).toBeDefined();
  });

  it('Renders with correct classes by default', () => {
    const wrapper = renderAndGetWrapper();
    expect(wrapper).toHaveClass('radio--small');
    expect(wrapper).not.toHaveClass('radio--error');
    expect(wrapper).not.toHaveClass('radio--disabled');
  });

  it('Renders with "xsmall" size class by if size is set to "Xsmall"', () => {
    const wrapper = renderAndGetWrapper({ size: RadioButtonSize.Xsmall });
    expect(wrapper).toHaveClass('radio--xsmall');
  });

  it('Renders with "small" size class by if size is set to "Small"', () => {
    const wrapper = renderAndGetWrapper({ size: RadioButtonSize.Small });
    expect(wrapper).toHaveClass('radio--small');
  });

  it('Renders with "error" class if the "error" property is true', () => {
    const wrapper = renderAndGetWrapper({ error: true });
    expect(wrapper).toHaveClass('radio--error');
  });

  it('Renders withot "error" class if the "error" property is false', () => {
    const wrapper = renderAndGetWrapper({ error: false });
    expect(wrapper).not.toHaveClass('radio--error');
  });

  it('Renders with "disabled" class if the "disabled" property is true', () => {
    const wrapper = renderAndGetWrapper({ disabled: true });
    expect(wrapper).toHaveClass('radio--disabled');
  });

  it('Renders without "disabled" class if the "disabled" property is false', () => {
    const wrapper = renderAndGetWrapper({ disabled: false });
    expect(wrapper).not.toHaveClass('radio--disabled');
  });
});

const render = (props: Partial<RadioButtonProps> = {}) => {
  const allProps = { ...defaultProps, ...props };
  return renderRtl(<RadioButton {...allProps} />);
};

const renderAndGetWrapper = (
  props: Partial<RadioButtonProps> = {},
): Element => {
  const { container } = render(props);
  const wrapper = container.querySelector('.radio');
  assert(wrapper !== null);
  return wrapper;
};
