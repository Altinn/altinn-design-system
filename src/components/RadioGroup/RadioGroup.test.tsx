import React from 'react';
import { act, render as renderRtl, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { RadioGroupProps } from './RadioGroup';
import { RadioGroup, RadioGroupSize, RadioGroupVariant } from './RadioGroup';

const user = userEvent.setup();

// Test data:
const name = 'radio-ga-ga';
const items = [
  { label: 'Ga ga', value: 'ga' },
  { label: 'Goo goo', value: 'goo' },
  { label: 'Blah blah', value: 'blah' },
];
const defaultProps: RadioGroupProps = {
  name,
  items,
};

describe('RadioGroup', () => {
  it('Renders radio group', () => {
    render();
    expect(screen.getByRole('radiogroup')).toBeInTheDocument();
  });

  it('Renders all given options', () => {
    render();
    expect(getRadioButtons()).toHaveLength(items.length);
  });

  it('Renders legend if given', () => {
    const legend = 'Lorem ipsum';
    render({ legend });
    expect(screen.getByText(legend)).toBeInTheDocument();
  });

  it('Renders description if given', () => {
    const description = 'Lorem ipsum dolor sit amet';
    render({ description });
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('Throws an error if there are duplicate values', () => {
    const renderFn = () =>
      render({
        items: [
          { label: 'Test 1', value: 'duplicated value' },
          { label: 'Test 2', value: 'duplicated value' },
        ],
      });
    jest.spyOn(console, 'error').mockImplementation(jest.fn()); // Keeps the console output clean
    expect(renderFn).toThrow('Each value in the radio group must be unique.');
  });

  it('Sets the given name on all radio buttons', () => {
    render();
    getRadioButtons().forEach((radio) => {
      expect(radio).toHaveAttribute('name', name);
    });
  });

  it('Sets values and labels on all radio buttons', () => {
    render();
    items.forEach(({ label, value }) => {
      expect(screen.getByLabelText(label)).toHaveAttribute('value', value);
    });
  });

  it('Does not check any radio button by default', () => {
    render();
    getRadioButtons().forEach((_, index) => expectNotChecked(index));
  });

  it('Checks the radio button given in the "value" property if given', () => {
    const valueIndex = 1;
    render({ value: items[valueIndex].value });
    expectOneChecked(valueIndex);
  });

  it('Does not call onChange handler on first render if no value if given', () => {
    const onChange = jest.fn();
    render({ onChange });
    expect(onChange).not.toHaveBeenCalled();
  });

  it('Does not call onChange handler on first render if a value if given', () => {
    const valueIndex = 1;
    const onChange = jest.fn();
    render({ value: items[valueIndex].value, onChange });
    expect(onChange).not.toHaveBeenCalled();
  });

  it('Does not call onChange handler if component rerenders with the same value', () => {
    const valueIndex = 1;
    const { value } = items[valueIndex];
    const onChange = jest.fn();
    const { rerender } = render({ value, onChange });
    rerender(<RadioGroup {...{ ...defaultProps, value, onChange }} />);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('Calls onChange handler with the checked value if component rerenders with another value', () => {
    const onChange = jest.fn();
    const { rerender } = render({ value: items[1].value, onChange });
    const valueIndex = 2;
    const { value } = items[valueIndex];
    rerender(<RadioGroup {...{ ...defaultProps, value, onChange }} />);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(value);
  });

  it('Checks radio button and calls onChange handler with the checked value when a radio button is clicked', async () => {
    const onChange = jest.fn();
    render({ onChange });
    let i = 0;
    while (i < items.length) {
      await act(() => user.click(getRadioButton(i)));
      expectOneChecked(i);
      expect(onChange).toHaveBeenCalledWith(defaultProps.items[i].value);
      i++;
      expect(onChange).toHaveBeenCalledTimes(i);
    }
  });

  it('Focuses on the first radio button if none is checked and user tabs', async () => {
    const { container } = render();
    await act(() => user.click(container));
    await act(() => user.tab());
    expect(getRadioButton(0)).toHaveFocus();
  });

  it('Focuses on the checked radio button if user tabs', async () => {
    const checkedIndex = 1;
    const { container } = render({ value: items[checkedIndex].value });
    await act(() => user.click(container));
    await act(() => user.tab());
    expect(getRadioButton(checkedIndex)).toHaveFocus();
  });

  it('Moves focus and checks the focused button when navigating with arrow keys', async () => {
    render();
    await act(() => user.click(getRadioButton(0)));
    await act(() => user.keyboard('{ArrowDown}'));
    expectOneChecked(1);
    expect(getRadioButton(1)).toHaveFocus();
    await act(() => user.keyboard('{ArrowUp}'));
    expectOneChecked(0);
    expect(getRadioButton(0)).toHaveFocus();
  });

  it('Disables all radio buttons when the "disabled" prop is true', () => {
    render({ disabled: true });
    getRadioButtons().forEach((radio) => expect(radio).toBeDisabled());
  });

  it('Does not call the onChange handler when the "disabled" prop is true', async () => {
    const onChange = jest.fn();
    render({ disabled: true, onChange });
    await act(() => user.click(getRadioButton(0)));
    expect(onChange).not.toHaveBeenCalled();
  });

  it('Renders radio buttons with the properties given in the "items" prop', () => {
    const description = 'Description',
      label = 'Label',
      radioId = 'id',
      value = 'value';
    const items = [{ description, disabled: true, label, radioId, value }];
    render({ items });
    const radio = getRadioButton(0);
    expect(radio.getAttribute('value')).toEqual(value);
    expect(radio.getAttribute('id')).toEqual(radioId);
    expect(radio).toBeDisabled();
    expect(screen.getByText(label)).toBeDefined();
    expect(screen.getByText(description)).toBeDefined();
  });

  it('Renders with "vertical" variant class and "small" size classname by default', () => {
    render();
    expect(screen.getByRole('radiogroup')).toHaveClass(
      'radio-group--vertical',
      'radio-group--small',
    );
  });

  it('Renders with "vertical" variant class if variant is set to "Vertical"', () => {
    render({ variant: RadioGroupVariant.Vertical });
    expect(screen.getByRole('radiogroup')).toHaveClass('radio-group--vertical');
  });

  it('Renders with "horizontal" variant class if variant is set to "Horizontal"', () => {
    render({ variant: RadioGroupVariant.Horizontal });
    expect(screen.getByRole('radiogroup')).toHaveClass(
      'radio-group--horizontal',
    );
  });

  it('Renders with "xsmall" size class if size is set to "Xsmall"', () => {
    render({ size: RadioGroupSize.Xsmall });
    expect(screen.getByRole('radiogroup')).toHaveClass('radio-group--xsmall');
  });

  it('Renders with "small" size class if size is set to "Small"', () => {
    render({ size: RadioGroupSize.Small });
    expect(screen.getByRole('radiogroup')).toHaveClass('radio-group--small');
  });

  it('Renders all radio buttons with presentation role when the "presentation" property is true', () => {
    render({ presentation: true });
    const numberOfRadios = defaultProps.items.length;
    expect(screen.queryAllByRole('presentation')).toHaveLength(numberOfRadios);
    expect(screen.queryAllByRole('radio')).toHaveLength(0);
    expect(screen.queryAllByRole('radiogroup')).toHaveLength(0);
  });
});

const render = (props?: Partial<RadioGroupProps>) =>
  renderRtl(
    <RadioGroup
      {...defaultProps}
      {...props}
    />,
  );

const getRadioButtons = () => screen.queryAllByRole('radio');
const getRadioButton = (index: number) => getRadioButtons()[index];
const getWrapper = (index: number) => document.querySelectorAll('label')[index];

const expectChecked = (index: number) => {
  expect(getRadioButton(index)).toBeChecked();
  expect(getWrapper(index)).toHaveClass('radio--checked');
};

const expectNotChecked = (index: number) => {
  expect(getRadioButton(index)).not.toBeChecked();
  expect(getWrapper(index)).not.toHaveClass('radio--checked');
};

const expectOneChecked = (index: number) => {
  getRadioButtons().forEach((_, currentIndex) => {
    currentIndex === index
      ? expectChecked(currentIndex)
      : expectNotChecked(currentIndex);
  });
};
