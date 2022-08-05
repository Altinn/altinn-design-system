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
import { ReadOnlyVariant, InputVariant } from './utils';

const user = userEvent.setup();

const getClassNames = (expectedClassName: string) => {
  const otherClassNames = Object.values(InputVariant).filter(
    (v) => v !== expectedClassName,
  );

  return { expectedClassName, otherClassNames };
};

describe('TextField', () => {
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

  describe('error-icon', () => {
    it('should not show error-icon when isValid is true', () => {
      render({ isValid: true });
      expect(screen.queryByTestId('input-icon-error')).not.toBeInTheDocument();
    });

    it('should not show error-icon when isValid is true and readOnly is true', () => {
      render({ isValid: true, readOnly: true });
      expect(screen.queryByTestId('input-icon-error')).not.toBeInTheDocument();
    });

    it('should not show error-icon when isValid is true and disabled is true', () => {
      render({ isValid: true, disabled: true });
      expect(screen.queryByTestId('input-icon-error')).not.toBeInTheDocument();
    });

    it('should show error-icon when isValid is false', () => {
      render({ isValid: false });
      expect(screen.queryByTestId('input-icon-error')).toBeInTheDocument();
    });
  });

  describe('input-variant', () => {
    it('should render with correct classname when when isValid is false and readOnly or disabled is not specified', () => {
      render({ isValid: false });
      const { expectedClassName, otherClassNames } = getClassNames(
        InputVariant.Error,
      );

      const textField = screen.getByTestId('TextField');

      expect(
        textField.classList.contains(`input-wrapper--${expectedClassName}`),
      ).toBe(true);
      otherClassNames.forEach((v) => {
        expect(textField.classList.contains(`input-wrapper--${v}`)).toBe(false);
      });
    });

    it('should render with correct classname when isValid is true and readOnly or disabled is not specified', () => {
      render({ isValid: true });
      const { expectedClassName, otherClassNames } = getClassNames(
        InputVariant.Default,
      );

      const textField = screen.getByTestId('TextField');

      expect(
        textField.classList.contains(`input-wrapper--${expectedClassName}`),
      ).toBe(true);
      otherClassNames.forEach((v) => {
        expect(textField.classList.contains(`input-wrapper--${v}`)).toBe(false);
      });
    });

    it('should render with correct classname when readOnly is true and disabled is not specified', () => {
      render({ readOnly: true });
      const { expectedClassName, otherClassNames } = getClassNames(
        InputVariant.ReadOnlyInfo,
      );

      const textField = screen.getByTestId('TextField');

      expect(
        textField.classList.contains(`input-wrapper--${expectedClassName}`),
      ).toBe(true);
      otherClassNames.forEach((v) => {
        expect(textField.classList.contains(`input-wrapper--${v}`)).toBe(false);
      });
    });

    it('should render with correct classname when readOnly is <readonly-confirm> and disabled is not specified', () => {
      render({ readOnly: ReadOnlyVariant.ReadOnlyConfirm });
      const { expectedClassName, otherClassNames } = getClassNames(
        InputVariant.ReadOnlyConfirm,
      );

      const textField = screen.getByTestId('TextField');

      expect(
        textField.classList.contains(`input-wrapper--${expectedClassName}`),
      ).toBe(true);
      otherClassNames.forEach((v) => {
        expect(textField.classList.contains(`input-wrapper--${v}`)).toBe(false);
      });
    });

    it('should render with correct classname when readOnly is <readonly-info> and disabled is not specified', () => {
      render({ readOnly: ReadOnlyVariant.ReadOnlyInfo });
      const { expectedClassName, otherClassNames } = getClassNames(
        InputVariant.ReadOnlyInfo,
      );

      const textField = screen.getByTestId('TextField');

      expect(
        textField.classList.contains(`input-wrapper--${expectedClassName}`),
      ).toBe(true);
      otherClassNames.forEach((v) => {
        expect(textField.classList.contains(`input-wrapper--${v}`)).toBe(false);
      });
    });

    it('should render with correct classname when disabled is true', () => {
      render({ disabled: true });
      const { expectedClassName, otherClassNames } = getClassNames(
        InputVariant.Disabled,
      );

      const textField = screen.getByTestId('TextField');

      expect(
        textField.classList.contains(`input-wrapper--${expectedClassName}`),
      ).toBe(true);
      otherClassNames.forEach((v) => {
        expect(textField.classList.contains(`input-wrapper--${v}`)).toBe(false);
      });
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
      render({ isValid: true, formatting: { number: { prefix: '$' } } });
      expect(
        screen.getByTestId('id-formatted-number-default'),
      ).toBeInTheDocument();
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
  });
});

const render = (props: Partial<TextFieldProps> = {}) => {
  const allProps = {
    id: 'id',
    onChange: jest.fn(),
    ...props,
  } as TextFieldProps;

  return renderRtl(<TextField {...allProps} />);
};
