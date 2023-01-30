import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type {
  MultiSelectOption,
  MultiSelectProps,
  SingleSelectOption,
  SingleSelectProps,
} from './Select';
import { Select } from './Select';

const user = userEvent.setup();

const singleSelectOptions: SingleSelectOption[] = [
  { label: 'Test 1', value: 'test1' },
  { label: 'Test 2', value: 'test2' },
  { label: 'Test 3', value: 'test3' },
];

const multiSelectOptions: Required<MultiSelectOption>[] = [
  { label: 'Test 1', value: 'test1', deleteButtonLabel: 'Delete test 1' },
  { label: 'Test 2', value: 'test2', deleteButtonLabel: 'Delete test 2' },
  { label: 'Test 3', value: 'test3', deleteButtonLabel: 'Delete test 3' },
];

const defaultSingleSelectProps: SingleSelectProps = {
  options: singleSelectOptions,
};
const defaultMultiSelectProps: MultiSelectProps = {
  options: multiSelectOptions,
  multiple: true,
};

describe('Select', () => {
  describe('Single select', () => {
    it('Renders a select box', () => {
      renderSingleSelect();
      expect(getCombobox()).toBeTruthy();
    });

    it('Renders correct number of options', () => {
      renderSingleSelect();
      expect(getOptions()).toHaveLength(singleSelectOptions.length);
    });

    it('Selects given value', () => {
      const selectedOptionIndex = 1;
      const selectedOption = singleSelectOptions[selectedOptionIndex];
      renderSingleSelect({ value: selectedOption.value });
      expectSelectedValue(selectedOption);
      expectSelectedOptions((i) => selectedOptionIndex === i);
    });

    it('Is not expanded by default', async () => {
      renderSingleSelect();
      expect(getCombobox()).toHaveAttribute('aria-expanded', 'false');
    });

    it('Expands when user clicks on it', async () => {
      renderSingleSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      expect(getCombobox()).toHaveAttribute('aria-expanded', 'true');
    });

    it('Closes when user selects an option', async () => {
      renderSingleSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.click(screen.getAllByRole('option')[1]));
      expect(getCombobox()).toHaveAttribute('aria-expanded', 'false');
    });

    it('Expands when combobox is focused and user presses an arrow key', async () => {
      renderSingleSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('ArrowUp'));
      expect(getCombobox()).toHaveAttribute('aria-expanded', 'true');
    });

    it('Keeps expansion when user navigates through the options using keyboard', async () => {
      renderSingleSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('{ArrowDown}'));
      expect(getCombobox()).toHaveAttribute('aria-expanded', 'true');
    });

    it('Closes when user clicks outside of the element', async () => {
      render(
        <>
          <span data-testid='some-element-outside' />
          <Select {...defaultSingleSelectProps} />
        </>,
      );
      await act(() => user.click(screen.getByRole('combobox')));
      expect(getCombobox()).toHaveAttribute('aria-expanded', 'true');
      await act(() => user.click(screen.getByTestId('some-element-outside')));
      expect(getCombobox()).toHaveAttribute('aria-expanded', 'false');
    });

    it('Closes when tab is used to navigate away', async () => {
      renderSingleSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      expect(getCombobox()).toHaveAttribute('aria-expanded', 'true');
      await act(() => user.tab());
      expect(getCombobox()).toHaveAttribute('aria-expanded', 'false');
    });

    it('Changes value when user clicks on another option', async () => {
      renderSingleSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.click(screen.getAllByRole('option')[1]));
      expectSelectedValue(singleSelectOptions[1]);
    });

    it('Selects first option when nothing is selected and user presses ArrowDown key', async () => {
      renderSingleSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('{ArrowDown}'));
      expectSelectedValue(singleSelectOptions[0]);
    });

    it('Selects option navigated to by arrow keys', async () => {
      renderSingleSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('{ArrowDown}'));
      await act(() => user.keyboard('{ArrowDown}'));
      expectSelectedValue(singleSelectOptions[1]);
      await act(() => user.keyboard('{ArrowDown}'));
      expectSelectedValue(singleSelectOptions[2]);
      await act(() => user.keyboard('{ArrowUp}'));
      expectSelectedValue(singleSelectOptions[1]);
      await act(() => user.keyboard('{ArrowUp}'));
      expectSelectedValue(singleSelectOptions[0]);
    });

    it('Selects last option when nothing is selected and user presses ArrowUp key', async () => {
      renderSingleSelect();
      await act(() => user.click(getCombobox()));
      await act(() => user.keyboard('{ArrowUp}'));
      expectSelectedValue(singleSelectOptions[singleSelectOptions.length - 1]);
    });

    it('Starts navigation from selected option when navigating with arrow keys', async () => {
      renderSingleSelect({ value: singleSelectOptions[2].value });
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('{ArrowUp}'));
      expectSelectedValue(singleSelectOptions[1]);
    });

    it('Calls onChange handler with new value when it changes', async () => {
      const onChange = jest.fn();
      renderSingleSelect({ onChange });
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.click(screen.getAllByRole('option')[1]));
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(singleSelectOptions[1].value);
    });

    it('Is enabled by default', async () => {
      renderSingleSelect();
      expect(screen.getByRole('combobox')).toBeEnabled();
    });

    it('Is enabled if "disabled" property is false', async () => {
      renderSingleSelect({ disabled: false });
      expect(screen.getByRole('combobox')).toBeEnabled();
    });

    it('Is disabled when "disabled" property is true', async () => {
      renderSingleSelect({ disabled: true });
      expect(screen.getByRole('combobox')).toBeDisabled();
    });

    it('Gets correct state according to keyboard/mouse navigation', async () => {
      renderSingleSelect();
      expect(getRoot().classList).not.toContain(
        'altinn-select--using-keyboard',
      );
      await act(() => user.tab());
      expect(getRoot().classList).toContain('altinn-select--using-keyboard');
      await act(() => user.click(document.body));
      expect(getRoot().classList).not.toContain(
        'altinn-select--using-keyboard',
      );
    });

    it('Throws an error if there are duplicate values', () => {
      const renderFn = () =>
        renderSingleSelect({
          options: [
            { label: 'Test 1', value: 'duplicated value' },
            { label: 'Test 2', value: 'duplicated value' },
          ],
        });
      jest.spyOn(console, 'error').mockImplementation(jest.fn()); // Keeps the console output clean
      expect(renderFn).toThrow('Each value in the option list must be unique.');
    });

    it('Sets given input id on combobox', () => {
      const inputId = 'some-unique-id';
      renderSingleSelect({ inputId });
      expect(screen.getByRole('combobox')).toHaveAttribute('id', inputId);
    });

    it('Focuses on combobox when label is clicked', async () => {
      const label = 'Lorem ipsum';
      renderSingleSelect({ label });
      await act(() => user.click(screen.getByText(label)));
      expect(screen.getByRole('combobox')).toHaveFocus();
    });

    it('Hides label, but makes it accessible, if the "hideLabel" property is set', async () => {
      const label = 'Lorem ipsum';
      renderSingleSelect({ hideLabel: true, label });
      expect(screen.queryByText(label)).toBeFalsy();
      expect(screen.getByLabelText(label)).toBeTruthy();
    });

    const expectSelectedValue = (option: SingleSelectOption) => {
      expect(getCombobox()).toHaveValue(option.value);
      expect(getCombobox()).toHaveTextContent(option.label);
    };
  });

  describe('Multiple select', () => {
    it('Renders a select box', () => {
      renderMultiSelect();
      expect(getCombobox()).toBeTruthy();
    });

    it('Renders correct number of options', () => {
      renderMultiSelect();
      expect(getOptions()).toHaveLength(multiSelectOptions.length);
    });

    it('Is not expanded by default', async () => {
      renderMultiSelect();
      expect(getCombobox()).toHaveAttribute('aria-expanded', 'false');
    });

    it('Expands when user clicks on it', async () => {
      renderMultiSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      expect(getCombobox()).toHaveAttribute('aria-expanded', 'true');
    });

    it('Expands when combobox is focused and user presses an arrow key', async () => {
      renderMultiSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('ArrowUp'));
      expect(getCombobox()).toHaveAttribute('aria-expanded', 'true');
    });

    it('Keeps expansion when user selects an option', async () => {
      renderMultiSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.click(screen.getAllByRole('option')[1]));
      expect(getCombobox()).toHaveAttribute('aria-expanded', 'true');
    });

    it('Keeps expansion when user navigates through the options using keyboard', async () => {
      renderMultiSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('{ArrowDown}'));
      expect(getCombobox()).toHaveAttribute('aria-expanded', 'true');
    });

    it('Closes when user clicks outside of the element', async () => {
      render(
        <>
          <span data-testid='some-element-outside' />
          <Select {...defaultMultiSelectProps} />
        </>,
      );
      await act(() => user.click(screen.getByRole('combobox')));
      expect(getCombobox()).toHaveAttribute('aria-expanded', 'true');
      await act(() => user.click(screen.getByTestId('some-element-outside')));
      expect(getCombobox()).toHaveAttribute('aria-expanded', 'false');
    });

    it('Closes when tab is used to navigate away', async () => {
      renderMultiSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      expect(getCombobox()).toHaveAttribute('aria-expanded', 'true');
      await act(() => user.tab());
      expect(getCombobox()).toHaveAttribute('aria-expanded', 'false');
    });

    it('Shows given selected options as selected', () => {
      const selectedOptIndices = [1, 2];
      const selectedOpts = selectedOptIndices.map((i) => multiSelectOptions[i]);
      const selectedValues = selectedOpts.map((o) => o.value);
      renderMultiSelect({ value: selectedValues });
      expectSelectedValues(selectedValues);
      expectSelectedOptions((i) => selectedOptIndices.includes(i));
    });

    it('Focuses on first option when no option has focus and ArrowDown key is pressed', async () => {
      const { container } = renderMultiSelect();
      await act(() => user.click(getCombobox()));
      await act(() => user.keyboard('{ArrowDown}'));
      expectFocusedOption(container, multiSelectOptions[0]);
    });

    it('Focuses on last option when no option has focus and ArrowUp key is pressed', async () => {
      const { container } = renderMultiSelect();
      await act(() => user.click(getCombobox()));
      await act(() => user.keyboard('{ArrowUp}'));
      const lastOption = multiSelectOptions[multiSelectOptions.length - 1];
      expectFocusedOption(container, lastOption);
    });

    it('Moves focus on arrow key click', async () => {
      const { container } = renderMultiSelect();
      await act(() => user.click(getCombobox()));
      await act(() => user.keyboard('{ArrowDown}'));
      await act(() => user.keyboard('{ArrowDown}'));
      expectFocusedOption(container, multiSelectOptions[1]);
      await act(() => user.keyboard('{ArrowDown}'));
      expectFocusedOption(container, multiSelectOptions[2]);
      await act(() => user.keyboard('{ArrowUp}'));
      expectFocusedOption(container, multiSelectOptions[1]);
      await act(() => user.keyboard('{ArrowUp}'));
      expectFocusedOption(container, multiSelectOptions[0]);
    });

    it('Does not move focus when first option is focused and ArrowUp key is pressed', async () => {
      const { container } = renderMultiSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('{ArrowDown}'));
      await act(() => user.keyboard('{ArrowUp}'));
      expectFocusedOption(container, multiSelectOptions[0]);
    });

    it('Does not move focus when last option is selected and ArrowDown key is pressed', async () => {
      const { container } = renderMultiSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('{ArrowUp}'));
      await act(() => user.keyboard('{ArrowDown}'));
      const lastOption = multiSelectOptions[multiSelectOptions.length - 1];
      expectFocusedOption(container, lastOption);
    });

    it('Focuses on selected option if it is the first to become selected', async () => {
      const { container } = renderMultiSelect();
      await act(() => user.click(screen.getAllByRole('option')[1]));
      expectFocusedOption(container, multiSelectOptions[1]);
    });

    it('Selects options on click', async () => {
      renderMultiSelect();
      const optionIndicesToSelect = [0, 2];
      for (const index of optionIndicesToSelect) {
        await act(() => user.click(screen.getAllByRole('option')[index]));
      }
      expectSelectedOptions((i) => optionIndicesToSelect.includes(i));
    });

    it('Unselects option on click', async () => {
      renderMultiSelect({ value: multiSelectOptions.map((o) => o.value) });
      const optionIndexToUnselect = 1;
      await act(() => user.click(getOptions()[optionIndexToUnselect]));
      expectSelectedOptions((i) => i !== optionIndexToUnselect);
    });

    it('Selects options on enter key press', async () => {
      renderMultiSelect();
      await act(() => user.click(getCombobox()));
      await act(() => user.keyboard('{ArrowDown}'));
      await act(() => user.keyboard('{Enter}'));
      await act(() => user.keyboard('{ArrowDown}'));
      await act(() => user.keyboard('{ArrowDown}'));
      await act(() => user.keyboard('{Enter}'));
      const optionElements = screen.getAllByRole('option');
      expect(optionElements[0]).toHaveAttribute('aria-selected', 'true');
      expect(optionElements[1]).toHaveAttribute('aria-selected', 'false');
      expect(optionElements[2]).toHaveAttribute('aria-selected', 'true');
      expectSelectedValues([
        multiSelectOptions[0].value,
        multiSelectOptions[2].value,
      ]);
    });

    it('Unselects option on enter key press', async () => {
      renderMultiSelect({ value: multiSelectOptions.map((o) => o.value) });
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('{ArrowDown}'));
      await act(() => user.keyboard('{ArrowDown}'));
      await act(() => user.keyboard('{Enter}'));
      const optionElements = screen.getAllByRole('option');
      expect(optionElements[0]).toHaveAttribute('aria-selected', 'true');
      expect(optionElements[1]).toHaveAttribute('aria-selected', 'false');
      expect(optionElements[2]).toHaveAttribute('aria-selected', 'true');
      expectSelectedValues([
        multiSelectOptions[0].value,
        multiSelectOptions[2].value,
      ]);
    });

    it('Displays delete button with given name', async () => {
      const deleteButtonLabel = 'Delete all';
      renderMultiSelect({ deleteButtonLabel });
      expect(screen.getByLabelText(deleteButtonLabel)).toBeTruthy();
    });

    it('Unselects all selected options when delete button is clicked', async () => {
      const allValues = multiSelectOptions.map((o) => o.value);
      const deleteButtonLabel = 'Delete all';
      renderMultiSelect({ value: allValues, deleteButtonLabel });
      await act(() => user.click(screen.getByLabelText(deleteButtonLabel)));
      expectSelectedValues([]);
      expectSelectedOptions(() => false);
    });

    it('Unselects option when individual delete button is clicked', async () => {
      const value = multiSelectOptions.map((o) => o.value);
      renderMultiSelect({ value });
      const optionIndexToUnselect = 1;
      const optionToUnselect = multiSelectOptions[optionIndexToUnselect];
      const { deleteButtonLabel } = optionToUnselect;
      await act(() => user.click(screen.getByLabelText(deleteButtonLabel)));
      expectSelectedValues(value.filter((v, i) => i !== optionIndexToUnselect));
      expectSelectedOptions((i) => i !== optionIndexToUnselect);
    });

    it('Enables common delete button if something is selected', () => {
      const deleteButtonLabel = 'Delete all';
      const value = [multiSelectOptions[0].value];
      renderMultiSelect({ deleteButtonLabel, value });
      expect(screen.getByLabelText(deleteButtonLabel)).toBeEnabled();
    });

    it('Disables common delete button if nothing is selected', () => {
      const deleteButtonLabel = 'Delete all';
      renderMultiSelect({ deleteButtonLabel });
      expect(screen.getByLabelText(deleteButtonLabel)).toBeDisabled();
    });

    it('Calls onChange handler with new value when it changes', async () => {
      const onChange = jest.fn();
      renderMultiSelect({ onChange });
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.click(screen.getAllByRole('option')[1]));
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith([multiSelectOptions[1].value]);
      await act(() => user.click(screen.getAllByRole('option')[2]));
      expect(onChange).toHaveBeenCalledTimes(2);
      expect(onChange).toHaveBeenCalledWith([
        multiSelectOptions[1].value,
        multiSelectOptions[2].value,
      ]);
    });

    it('Is enabled by default', async () => {
      renderMultiSelect();
      expect(screen.getByRole('combobox')).toBeEnabled();
    });

    it('Is enabled if "disabled" property is false', async () => {
      renderMultiSelect({ disabled: false });
      expect(screen.getByRole('combobox')).toBeEnabled();
    });

    it('Is disabled when "disabled" property is true', async () => {
      renderMultiSelect({ disabled: true });
      expect(screen.getByRole('combobox')).toBeDisabled();
    });

    it('Disables common delete button if something is selected, but the "disabled" property is true', async () => {
      const deleteButtonLabel = 'Delete all';
      renderMultiSelect({
        deleteButtonLabel,
        disabled: true,
        value: [multiSelectOptions[0].value],
      });
      expect(screen.getByLabelText(deleteButtonLabel)).toBeDisabled();
    });

    it('Enables individual delete buttons by default', async () => {
      const selectedOption = multiSelectOptions[0];
      renderMultiSelect({ value: [selectedOption.value] });
      const { deleteButtonLabel } = selectedOption;
      expect(screen.getByLabelText(deleteButtonLabel)).toBeEnabled();
    });

    it('Disables individual delete buttons when the "disabled" property is true', async () => {
      const selectedOption = multiSelectOptions[0];
      renderMultiSelect({ disabled: true, value: [selectedOption.value] });
      const { deleteButtonLabel } = selectedOption;
      expect(screen.getByLabelText(deleteButtonLabel)).toBeDisabled();
    });

    it('Gets correct state according to keyboard/mouse navigation', async () => {
      renderMultiSelect();
      expect(getRoot().classList).not.toContain(
        'altinn-select--using-keyboard',
      );
      await act(() => user.tab());
      expect(getRoot().classList).toContain('altinn-select--using-keyboard');
      await act(() => user.click(document.body));
      expect(getRoot().classList).not.toContain(
        'altinn-select--using-keyboard',
      );
    });

    it('Throws an error if there are duplicate values', () => {
      const renderFn = () =>
        renderMultiSelect({
          options: [
            { label: 'Test 1', value: 'duplicated value' },
            { label: 'Test 2', value: 'duplicated value' },
          ],
        });
      jest.spyOn(console, 'error').mockImplementation(jest.fn()); // Keeps the console output clean
      expect(renderFn).toThrow('Each value in the option list must be unique.');
    });

    it('Sets given input id on combobox', () => {
      const inputId = 'some-unique-id';
      renderMultiSelect({ inputId });
      expect(screen.getByRole('combobox')).toHaveAttribute('id', inputId);
    });

    it('Focuses on combobox when label is clicked', async () => {
      const label = 'Lorem ipsum';
      renderMultiSelect({ label });
      await act(() => user.click(screen.getByText(label)));
      expect(screen.getByRole('combobox')).toHaveFocus();
    });

    it('Hides label, but makes it accessible, if the "hideLabel" property is set', async () => {
      const label = 'Lorem ipsum';
      renderMultiSelect({ hideLabel: true, label });
      expect(screen.queryByText(label)).toBeFalsy();
      expect(screen.getByLabelText(label)).toBeTruthy();
    });

    const getFocusedOption = (container: HTMLElement) =>
      container.querySelector('[class*="focused"]');

    const expectFocusedOption = (con: HTMLElement, opt: MultiSelectOption) =>
      expect(getFocusedOption(con)).toHaveTextContent(opt.label);

    const expectSelectedValues = (values: string[]) =>
      expect(getCombobox()).toHaveValue(values.toString());
  });
});

const renderSingleSelect = (props?: Partial<SingleSelectProps>) =>
  render(
    <Select
      {...defaultSingleSelectProps}
      {...props}
    />,
  );

const renderMultiSelect = (props?: Partial<MultiSelectProps>) =>
  render(
    <Select
      {...defaultMultiSelectProps}
      {...props}
    />,
  );

const getCombobox = () => screen.getByRole('combobox');

const getOptions = () => screen.queryAllByRole('option');

const expectItemToBeSelected = (item: HTMLElement) =>
  expect(item).toHaveAttribute('aria-selected', 'true');

const expectItemNotToBeSelected = (item: HTMLElement) =>
  expect(item).toHaveAttribute('aria-selected', 'false');

const expectSelectedOptions = (predicate: (index: number) => boolean) =>
  getOptions().forEach((option, index) => {
    predicate(index)
      ? expectItemToBeSelected(option)
      : expectItemNotToBeSelected(option);
  });

const getRoot = () => screen.getByTestId('select-root');
