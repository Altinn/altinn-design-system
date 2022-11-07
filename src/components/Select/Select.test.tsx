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
  { displayName: 'Test 1', value: 'test1' },
  { displayName: 'Test 2', value: 'test2' },
  { displayName: 'Test 3', value: 'test3' },
];

const multiSelectOptions: Required<MultiSelectOption>[] = [
  { displayName: 'Test 1', value: 'test1', deleteButtonLabel: 'Delete test 1' },
  { displayName: 'Test 2', value: 'test2', deleteButtonLabel: 'Delete test 2' },
  { displayName: 'Test 3', value: 'test3', deleteButtonLabel: 'Delete test 3' },
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
      expect(screen.getByRole('combobox')).toBeTruthy();
    });

    it('Renders correct number of options', () => {
      renderSingleSelect();
      expect(screen.queryAllByRole('option')).toHaveLength(
        singleSelectOptions.length,
      );
    });

    it('Selects given value', () => {
      const selectedOptionIndex = 1;
      const selectedOption = singleSelectOptions[selectedOptionIndex];
      renderSingleSelect({ value: selectedOption.value });
      expect(screen.getByRole('combobox')).toHaveTextContent(
        selectedOption.displayName,
      );
      screen.getAllByRole('option').forEach((option, i) => {
        expect(option).toHaveAttribute(
          'aria-selected',
          selectedOptionIndex === i ? 'true' : 'false',
        );
      });
    });

    it('Is not expanded by default', async () => {
      renderSingleSelect();
      expect(screen.getByRole('combobox')).toHaveAttribute(
        'aria-expanded',
        'false',
      );
    });

    it('Expands when user clicks on it', async () => {
      renderSingleSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      expect(screen.getByRole('combobox')).toHaveAttribute(
        'aria-expanded',
        'true',
      );
    });

    it('Closes when user selects an option', async () => {
      renderSingleSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.click(screen.getAllByRole('option')[1]));
      expect(screen.getByRole('combobox')).toHaveAttribute(
        'aria-expanded',
        'false',
      );
    });

    it('Expands when combobox is focused and user presses an arrow key', async () => {
      renderSingleSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('ArrowUp'));
      expect(screen.getByRole('combobox')).toHaveAttribute(
        'aria-expanded',
        'true',
      );
    });

    it('Keeps expansion when user navigates through the options using keyboard', async () => {
      renderSingleSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('{ArrowDown}'));
      expect(screen.getByRole('combobox')).toHaveAttribute(
        'aria-expanded',
        'true',
      );
    });

    it('Closes when user clicks outside of the element', async () => {
      render(
        <>
          <span data-testid='some-element-outside' />
          <Select {...defaultSingleSelectProps} />
        </>,
      );
      await act(() => user.click(screen.getByRole('combobox')));
      expect(screen.getByRole('combobox')).toHaveAttribute(
        'aria-expanded',
        'true',
      );
      await act(() => user.click(screen.getByTestId('some-element-outside')));
      expect(screen.getByRole('combobox')).toHaveAttribute(
        'aria-expanded',
        'false',
      );
    });

    it('Closes when tab is used to navigate away', async () => {
      renderSingleSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      expect(screen.getByRole('combobox')).toHaveAttribute(
        'aria-expanded',
        'true',
      );
      await act(() => user.tab());
      expect(screen.getByRole('combobox')).toHaveAttribute(
        'aria-expanded',
        'false',
      );
    });

    it('Changes value when user clicks on another option', async () => {
      renderSingleSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.click(screen.getAllByRole('option')[1]));
      expect(screen.getByRole('combobox')).toHaveTextContent(
        singleSelectOptions[1].displayName,
      );
    });

    it('Selects first option when nothing is selected and user presses ArrowDown key', async () => {
      renderSingleSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('{ArrowDown}'));
      expect(screen.getByRole('combobox')).toHaveTextContent(
        singleSelectOptions[0].displayName,
      );
    });

    it('Selects option navigated to by arrow keys', async () => {
      renderSingleSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('{ArrowDown}'));
      await act(() => user.keyboard('{ArrowDown}'));
      expect(screen.getByRole('combobox')).toHaveTextContent(
        singleSelectOptions[1].displayName,
      );
      await act(() => user.keyboard('{ArrowDown}'));
      expect(screen.getByRole('combobox')).toHaveTextContent(
        singleSelectOptions[2].displayName,
      );
      await act(() => user.keyboard('{ArrowUp}'));
      expect(screen.getByRole('combobox')).toHaveTextContent(
        singleSelectOptions[1].displayName,
      );
      await act(() => user.keyboard('{ArrowUp}'));
      expect(screen.getByRole('combobox')).toHaveTextContent(
        singleSelectOptions[0].displayName,
      );
    });

    it('Selects last option when nothing is selected and user presses ArrowUp key', async () => {
      renderSingleSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('{ArrowUp}'));
      expect(screen.getByRole('combobox')).toHaveTextContent(
        singleSelectOptions[singleSelectOptions.length - 1].displayName,
      );
    });

    it('Starts navigation from selected option when navigating with arrow keys', async () => {
      renderSingleSelect({ value: singleSelectOptions[2].value });
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('{ArrowUp}'));
      expect(screen.getByRole('combobox')).toHaveTextContent(
        singleSelectOptions[1].displayName,
      );
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
      expect(screen.getByTestId('select-root').classList).not.toContain(
        'select--using-keyboard',
      );
      await act(() => user.tab());
      expect(screen.getByTestId('select-root').classList).toContain(
        'select--using-keyboard',
      );
      await act(() => user.click(document.body));
      expect(screen.getByTestId('select-root').classList).not.toContain(
        'select--using-keyboard',
      );
    });

    it('Throws an error if there are duplicate values', () => {
      const renderFn = () =>
        renderSingleSelect({
          options: [
            { displayName: 'Test 1', value: 'duplicated value' },
            { displayName: 'Test 2', value: 'duplicated value' },
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
  });

  describe('Multiple select', () => {
    it('Renders a select box', () => {
      renderMultiSelect();
      expect(screen.getByRole('combobox')).toBeTruthy();
    });

    it('Renders correct number of options', () => {
      renderMultiSelect();
      expect(screen.queryAllByRole('option')).toHaveLength(
        multiSelectOptions.length,
      );
    });

    it('Is not expanded by default', async () => {
      renderMultiSelect();
      expect(screen.getByRole('combobox')).toHaveAttribute(
        'aria-expanded',
        'false',
      );
    });

    it('Expands when user clicks on it', async () => {
      renderMultiSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      expect(screen.getByRole('combobox')).toHaveAttribute(
        'aria-expanded',
        'true',
      );
    });

    it('Expands when combobox is focused and user presses an arrow key', async () => {
      renderMultiSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('ArrowUp'));
      expect(screen.getByRole('combobox')).toHaveAttribute(
        'aria-expanded',
        'true',
      );
    });

    it('Keeps expansion when user selects an option', async () => {
      renderMultiSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.click(screen.getAllByRole('option')[1]));
      expect(screen.getByRole('combobox')).toHaveAttribute(
        'aria-expanded',
        'true',
      );
    });

    it('Keeps expansion when user navigates through the options using keyboard', async () => {
      renderMultiSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('{ArrowDown}'));
      expect(screen.getByRole('combobox')).toHaveAttribute(
        'aria-expanded',
        'true',
      );
    });

    it('Closes when user clicks outside of the element', async () => {
      render(
        <>
          <span data-testid='some-element-outside' />
          <Select {...defaultMultiSelectProps} />
        </>,
      );
      await act(() => user.click(screen.getByRole('combobox')));
      expect(screen.getByRole('combobox')).toHaveAttribute(
        'aria-expanded',
        'true',
      );
      await act(() => user.click(screen.getByTestId('some-element-outside')));
      expect(screen.getByRole('combobox')).toHaveAttribute(
        'aria-expanded',
        'false',
      );
    });

    it('Closes when tab is used to navigate away', async () => {
      renderMultiSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      expect(screen.getByRole('combobox')).toHaveAttribute(
        'aria-expanded',
        'true',
      );
      await act(() => user.tab());
      expect(screen.getByRole('combobox')).toHaveAttribute(
        'aria-expanded',
        'false',
      );
    });

    it('Shows given selected options as selected', () => {
      const selectedOptionIndices = [1, 2];
      const selectedOptions = selectedOptionIndices.map(
        (i) => multiSelectOptions[i],
      );
      const selectedValues = selectedOptions.map((o) => o.value);
      renderMultiSelect({ value: selectedValues });
      screen.getAllByRole('option').forEach((o, i) => {
        expect(o).toHaveAttribute(
          'aria-selected',
          selectedOptionIndices.includes(i) ? 'true' : 'false',
        );
      });
    });

    it('Focuses on first option when no option has focus and ArrowDown key is pressed', async () => {
      const { container } = renderMultiSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('{ArrowDown}'));
      expect(container.querySelector('[class*="focused"]')).toHaveTextContent(
        multiSelectOptions[0].displayName,
      );
    });

    it('Focuses on last option when no option has focus and ArrowUp key is pressed', async () => {
      const { container } = renderMultiSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('{ArrowUp}'));
      expect(container.querySelector('[class*="focused"]')).toHaveTextContent(
        multiSelectOptions[multiSelectOptions.length - 1].displayName,
      );
    });

    it('Moves focus on arrow key click', async () => {
      const { container } = renderMultiSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('{ArrowDown}'));
      await act(() => user.keyboard('{ArrowDown}'));
      expect(container.querySelector('[class*="focused"]')).toHaveTextContent(
        multiSelectOptions[1].displayName,
      );
      await act(() => user.keyboard('{ArrowDown}'));
      expect(container.querySelector('[class*="focused"]')).toHaveTextContent(
        multiSelectOptions[2].displayName,
      );
      await act(() => user.keyboard('{ArrowUp}'));
      expect(container.querySelector('[class*="focused"]')).toHaveTextContent(
        multiSelectOptions[1].displayName,
      );
      await act(() => user.keyboard('{ArrowUp}'));
      expect(container.querySelector('[class*="focused"]')).toHaveTextContent(
        multiSelectOptions[0].displayName,
      );
    });

    it('Does not move focus when first option is focused and ArrowUp key is pressed', async () => {
      const { container } = renderMultiSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('{ArrowDown}'));
      await act(() => user.keyboard('{ArrowUp}'));
      expect(container.querySelector('[class*="focused"]')).toHaveTextContent(
        multiSelectOptions[0].displayName,
      );
    });

    it('Does not move focus when last option is selected and ArrowDown key is pressed', async () => {
      const { container } = renderMultiSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('{ArrowUp}'));
      await act(() => user.keyboard('{ArrowDown}'));
      expect(container.querySelector('[class*="focused"]')).toHaveTextContent(
        multiSelectOptions[multiSelectOptions.length - 1].displayName,
      );
    });

    it('Focuses on selected option if it is the first to become selected', async () => {
      const { container } = renderMultiSelect();
      await act(() => user.click(screen.getAllByRole('option')[1]));
      expect(container.querySelector('[class*="focused"]')).toHaveTextContent(
        multiSelectOptions[1].displayName,
      );
    });

    it('Selects options on click', async () => {
      renderMultiSelect();
      const optionIndicesToSelect = [0, 2];
      for (const index of optionIndicesToSelect) {
        await act(() => user.click(screen.getAllByRole('option')[index]));
      }
      screen.getAllByRole('option').forEach((o, i) => {
        expect(o).toHaveAttribute(
          'aria-selected',
          optionIndicesToSelect.includes(i) ? 'true' : 'false',
        );
      });
    });

    it('Unselects option on click', async () => {
      renderMultiSelect({ value: multiSelectOptions.map((o) => o.value) });
      const optionIndexToUnselect = 1;
      await act(() =>
        user.click(screen.getAllByRole('option')[optionIndexToUnselect]),
      );
      screen.getAllByRole('option').forEach((o, i) => {
        expect(o).toHaveAttribute(
          'aria-selected',
          i === optionIndexToUnselect ? 'false' : 'true',
        );
      });
    });

    it('Selects options on enter key press', async () => {
      renderMultiSelect();
      await act(() => user.click(screen.getByRole('combobox')));
      await act(() => user.keyboard('{ArrowDown}'));
      await act(() => user.keyboard('{Enter}'));
      await act(() => user.keyboard('{ArrowDown}'));
      await act(() => user.keyboard('{ArrowDown}'));
      await act(() => user.keyboard('{Enter}'));
      const optionElements = screen.getAllByRole('option');
      expect(optionElements[0]).toHaveAttribute('aria-selected', 'true');
      expect(optionElements[1]).toHaveAttribute('aria-selected', 'false');
      expect(optionElements[2]).toHaveAttribute('aria-selected', 'true');
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
      screen.getAllByRole('option').forEach((o) => {
        expect(o).toHaveAttribute('aria-selected', 'false');
      });
    });

    it('Unselects option when individual delete button is clicked', async () => {
      renderMultiSelect({ value: multiSelectOptions.map((o) => o.value) });
      const optionIndexToUnselect = 1;
      await act(() =>
        user.click(
          screen.getByLabelText(
            multiSelectOptions[optionIndexToUnselect].deleteButtonLabel,
          ),
        ),
      );
      screen.getAllByRole('option').forEach((o, i) => {
        expect(o).toHaveAttribute(
          'aria-selected',
          i === optionIndexToUnselect ? 'false' : 'true',
        );
      });
    });

    it('Enables common delete button if something is selected', () => {
      const deleteButtonLabel = 'Delete all';
      renderMultiSelect({
        deleteButtonLabel,
        value: [multiSelectOptions[0].value],
      });
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
      expect(
        screen.getByLabelText(selectedOption.deleteButtonLabel),
      ).toBeEnabled();
    });

    it('Disables individual delete buttons when the "disabled" property is true', async () => {
      const selectedOption = multiSelectOptions[0];
      renderMultiSelect({ disabled: true, value: [selectedOption.value] });
      expect(
        screen.getByLabelText(selectedOption.deleteButtonLabel),
      ).toBeDisabled();
    });

    it('Gets correct state according to keyboard/mouse navigation', async () => {
      renderMultiSelect();
      expect(screen.getByTestId('select-root').classList).not.toContain(
        'select--using-keyboard',
      );
      await act(() => user.tab());
      expect(screen.getByTestId('select-root').classList).toContain(
        'select--using-keyboard',
      );
      await act(() => user.click(document.body));
      expect(screen.getByTestId('select-root').classList).not.toContain(
        'select--using-keyboard',
      );
    });

    it('Throws an error if there are duplicate values', () => {
      const renderFn = () =>
        renderMultiSelect({
          options: [
            { displayName: 'Test 1', value: 'duplicated value' },
            { displayName: 'Test 2', value: 'duplicated value' },
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
