import {
  render as renderRtl,
  screen,
  act,
  createEvent,
  fireEvent,
} from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

import type { TextFieldProps } from './TextField';
import { TextField } from './TextField';

const user = userEvent.setup();

describe('TextField', () => {
  describe('Default', () => {
    it('should trigger onPaste when pasting into input', () => {
      const handlePaste = jest.fn();
      render({
        onPaste: handlePaste,
      });

      const element = screen.getByRole('textbox');
      const paste = createEvent.paste(element, {
        clipboardData: {
          getData: () => 'hello world',
        },
      });

      fireEvent(element, paste);

      expect(handlePaste).toHaveBeenCalledTimes(1);
    });

    it('should trigger onBlur event when field loses focus', async () => {
      const handleChange = jest.fn();
      render({ onBlur: handleChange });

      const element = screen.getByRole('textbox');
      await user.click(element);
      expect(element).toHaveFocus();
      await user.tab();

      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should trigger onChange event for each keystroke', async () => {
      const handleChange = jest.fn();
      render({ onChange: handleChange });

      const element = screen.getByRole('textbox');
      await user.click(element);
      expect(element).toHaveFocus();
      await user.keyboard('test');

      expect(handleChange).toHaveBeenCalledTimes(4);
    });

    it('Sets given id on input field', () => {
      const id = 'some-unique-id';
      render({ id });
      expect(screen.getByRole('textbox')).toHaveAttribute('id', id);
    });

    it('Focuses on input field when label is clicked and id is not given', async () => {
      const label = 'Lorem ipsum';
      render({ label });
      await user.click(screen.getByText(label));
      expect(screen.getByRole('textbox')).toHaveFocus();
    });

    it('Focuses on input field when label is clicked and id is given', async () => {
      const label = 'Lorem ipsum';
      render({ id: 'some-unique-id', label });
      await user.click(screen.getByText(label));
      expect(screen.getByRole('textbox')).toHaveFocus();
    });
  });

  describe('number-format-input', () => {
    it('should trigger onPaste when pasting into input', () => {
      const handlePaste = jest.fn();
      render({
        onPaste: handlePaste,
        formatting: { number: { prefix: '$' } },
      });

      const element = screen.getByRole('textbox');
      const paste = createEvent.paste(element, {
        clipboardData: {
          getData: () => '123456',
        },
      });

      fireEvent(element, paste);

      expect(handlePaste).toHaveBeenCalledTimes(1);
    });

    it('should render as a NumberFormat element if format.number is specified', () => {
      render({ isValid: true, formatting: { number: {} } });
      expect(screen.getByRole('textbox').inputMode).toBe('numeric');
    });

    it('should trigger onBlur event when field loses focus', async () => {
      const handleChange = jest.fn();
      render({ onBlur: handleChange, formatting: { number: { prefix: '$' } } });

      const element = screen.getByRole('textbox');
      await user.click(element);
      expect(element).toHaveFocus();
      await user.tab();

      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should trigger onChange for every keystroke, and the event value should not contain formatting', async () => {
      let testValue;
      const handleChange = jest.fn(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          testValue = event.target.value;
        },
      );
      render({
        onChange: handleChange,
        formatting: { number: { prefix: '$', thousandSeparator: ' ' } },
      });

      const element = screen.getByRole('textbox');
      await user.click(element);
      expect(element).toHaveFocus();

      await act(async () => {
        await user.keyboard('1234');
      });

      expect(screen.getByDisplayValue('$1 234')).toBeInTheDocument();
      expect(handleChange).toHaveBeenCalledTimes(4);
      expect(testValue).toBe('1234');
    });

    it('should not trigger onChange when component is rerendered', async () => {
      const handleChange = jest.fn();
      const { rerender } = render({
        onChange: handleChange,
        value: '1234',
        formatting: { number: { prefix: '$', thousandSeparator: ' ' } },
      });

      expect(screen.getByDisplayValue('$1 234')).toBeInTheDocument();
      expect(handleChange).not.toHaveBeenCalled();

      rerender(
        <TextField
          onChange={handleChange}
          value='12345'
          formatting={{ number: { prefix: '$', thousandSeparator: ' ' } }}
        />,
      );

      expect(screen.getByDisplayValue('$12 345')).toBeInTheDocument();
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('should handle backspace', async () => {
      let testValue;
      const handleChange = jest.fn(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          testValue = event.target.value;
        },
      );

      render({
        onChange: handleChange,
        value: '123',
        formatting: { number: { suffix: ' 000 NOK', thousandSeparator: ' ' } },
      });

      expect(screen.getByDisplayValue('123 000 NOK')).toBeInTheDocument();

      const element = screen.getByRole('textbox');
      await user.click(element);
      expect(element).toHaveFocus();

      await act(async () => {
        await user.keyboard('{Backspace}{Backspace}');
      });

      expect(screen.getByDisplayValue('1 000 NOK')).toBeInTheDocument();
      expect(handleChange).toHaveBeenCalledTimes(2);
      expect(testValue).toBe('1');

      await act(async () => {
        await user.keyboard('{Backspace}');
      });

      expect(handleChange).toHaveBeenCalledTimes(3);
      expect(testValue).toBe('');
    });

    it('should handle negative numbers', async () => {
      let testValue;
      const handleChange = jest.fn(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          testValue = event.target.value;
        },
      );

      render({
        onChange: handleChange,
        value: '',
        formatting: { number: { suffix: ' 000 NOK', thousandSeparator: ' ' } },
      });

      const element = screen.getByRole('textbox');
      await user.click(element);
      expect(element).toHaveFocus();

      await act(async () => {
        await user.keyboard('-123');
      });

      expect(screen.getByDisplayValue('-123 000 NOK')).toBeInTheDocument();
      expect(handleChange).toHaveBeenCalledTimes(4);
      expect(testValue).toBe('-123');

      await act(async () => {
        await user.keyboard('-');
      });

      expect(screen.getByDisplayValue('123 000 NOK')).toBeInTheDocument();
      expect(handleChange).toHaveBeenCalledTimes(5);
      expect(testValue).toBe('123');
    });

    it('should handle "-" in prefix', async () => {
      let testValue;
      const handleChange = jest.fn(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          testValue = event.target.value;
        },
      );

      render({
        onChange: handleChange,
        value: '',
        formatting: { number: { prefix: '- 0 ' } },
      });

      const element = screen.getByRole('textbox');
      await user.click(element);
      expect(element).toHaveFocus();

      await act(async () => {
        await user.keyboard('1{Backspace}');
      });

      expect(handleChange).toHaveBeenCalledTimes(2);
      expect(testValue).toBe('');
    });

    it('should handle zeros in suffix (v4 & v5 bug)', async () => {
      let testValue;
      const handleChange = jest.fn(
        (event: React.ChangeEvent<HTMLInputElement>) => {
          testValue = event.target.value;
        },
      );

      render({
        onChange: handleChange,
        value: '123',
        formatting: { number: { suffix: ' 000 NOK', thousandSeparator: ' ' } },
      });

      expect(screen.getByDisplayValue('123 000 NOK')).toBeInTheDocument();

      const element: HTMLInputElement = screen.getByRole('textbox');
      await user.click(element);
      expect(element).toHaveFocus();

      element.setSelectionRange(2, 4); // Select '3 ' (v4 bug)
      await act(async () => {
        await user.keyboard('5');
      });

      expect(screen.getByDisplayValue('125 000 NOK')).toBeInTheDocument();
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(testValue).toBe('125');

      element.setSelectionRange(8, 11); // Select 'NOK' (v5 bug)
      await act(async () => {
        await user.keyboard('8');
      });

      expect(screen.getByDisplayValue('1 258 000 NOK')).toBeInTheDocument();
      expect(handleChange).toHaveBeenCalledTimes(2);
      expect(testValue).toBe('1258');
    });

    it('Sets given id on input field', () => {
      const id = 'some-unique-id';
      render({ id, formatting: { number: {} } });
      expect(screen.getByRole('textbox')).toHaveAttribute('id', id);
    });

    it('Focuses on input field when label is clicked and id is not given', async () => {
      const label = 'Lorem ipsum';
      render({ label, formatting: { number: {} } });
      await user.click(screen.getByText(label));
      expect(screen.getByRole('textbox')).toHaveFocus();
    });

    it('Focuses on input field when label is clicked and id is given', async () => {
      const label = 'Lorem ipsum';
      render({ id: 'some-unique-id', label, formatting: { number: {} } });
      await user.click(screen.getByText(label));
      expect(screen.getByRole('textbox')).toHaveFocus();
    });
  });
});

const render = (props: Partial<TextFieldProps> = {}) => {
  const allProps = {
    onChange: jest.fn(),
    ...props,
  } as TextFieldProps;

  return renderRtl(<TextField {...allProps} />);
};
