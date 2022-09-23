import React from 'react';
import { act, render as renderRtl, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { CheckboxProps } from './Checkbox';
import { Checkbox } from './Checkbox';

const user = userEvent.setup();

describe('Checkbox', () => {
  it('Should not be checked by default', () => {
    render();
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('Should be checked if the "checked" prop is true', () => {
    render({ checked: true });
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('Should become checked when initially unchecked and user clicks', async () => {
    const wrapper = renderAndGetWrapper({ checked: false });
    await act(() => user.click(wrapper));
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('Should become unchecked when initially checked and user clicks', async () => {
    const wrapper = renderAndGetWrapper({ checked: true });
    await act(() => user.click(wrapper));
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('Should not change state when disabled and user clicks', async () => {
    const wrapper = renderAndGetWrapper({ checked: false, disabled: true });
    await act(() => user.click(wrapper));
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('Should not display checkbox when read-only', async () => {
    render({ checked: false, readOnly: true });
    const checkboxes = screen.queryAllByRole('checkbox');
    expect(checkboxes).toHaveLength(0);
  });

  it('Should display label text', () => {
    const label = 'Lorem ipsum';
    render({ label });
    expect(screen.getByText(label)).toBeDefined();
  });

  it('Should render checkbox with given checkboxId', () => {
    const checkboxId = 'the-checkbox';
    render({ checkboxId });
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.id).toEqual(checkboxId);
  });

  it('Should render checkbox with given name', () => {
    const name = 'the-checkbox';
    render({ name });
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox.getAttribute('name')).toEqual(name);
  });

  it('Should become checked when "checked" prop changes from false to true', () => {
    const { rerender } = render({ checked: false });
    rerender(<Checkbox checked={true} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('Should become unchecked when "checked" prop changes from true to false', () => {
    const { rerender } = render({ checked: true });
    rerender(<Checkbox checked={false} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });
});

const render = (props: Partial<CheckboxProps> = {}) => {
  const allProps = { ...props };
  return renderRtl(<Checkbox {...allProps} />);
};

const renderAndGetWrapper = (props: Partial<CheckboxProps> = {}): Element => {
  const { container } = render(props);
  const wrapper = container.querySelector('.wrapper');
  expect(wrapper).not.toBeNull();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return wrapper!;
};
