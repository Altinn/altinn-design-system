import { render as renderRtl, screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

import type { ITextFieldProps } from './TextField';
import { TextField } from './TextField';
import { ReadOnlyVariant } from './variants';

const user = userEvent.setup();

describe('TextField', () => {
  it('should trigger onBlur event', async () => {
    const fn = jest.fn();
    render({ onBlur: fn });
    const element = screen.getByRole('textbox');
    await user.click(element);
    expect(element).toHaveFocus();
    await user.tab();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should trigger onChange event', async () => {
    const fn = jest.fn();
    render({ onChange: fn });
    const element = screen.getByRole('textbox');
    await user.click(element);
    expect(element).toHaveFocus();
    await user.keyboard('test');
    expect(fn).toHaveBeenCalledTimes(4);
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
    it('should use the css class for error when isValid is false and readOnly or disabled is not specified', () => {
      render({ isValid: false });
      expect(screen.queryByTestId('id-error')).toBeInTheDocument();
    });

    it('should use the css class for default when isValid is true and readOnly or disabled is not specified', () => {
      render({ isValid: true });
      expect(screen.queryByTestId('id-default')).toBeInTheDocument();
    });

    it('should use the css class for readonly-info when readOnly is true and disabled is not specified', () => {
      render({ readOnly: true });
      expect(screen.queryByTestId('id-readonly-info')).toBeInTheDocument();
    });

    it('should use the css class for readonly-confirm when readOnly is <readonly-confirm> and disabled is not specified', () => {
      render({ readOnly: ReadOnlyVariant.ReadonlyConfirm });
      expect(screen.queryByTestId('id-readonly-confirm')).toBeInTheDocument();
    });

    it('should use the css class for readonly-info when readOnly is <readonly-info> and disabled is not specified', () => {
      render({ readOnly: ReadOnlyVariant.ReadonlyInfo });
      expect(screen.queryByTestId('id-readonly-info')).toBeInTheDocument();
    });

    it('should use the css class for disabled when disabled is true', () => {
      render({ disabled: true });
      expect(screen.queryByTestId('id-disabled')).toBeInTheDocument();
    });
  });

  describe('number-format-input', () => {
    it('should render as a NumberFormat element if format.number is specified', () => {
      render({ isValid: true, formatting: { number: { prefix: '$' } } });
      expect(
        screen.getByTestId('id-formatted-number-default'),
      ).toBeInTheDocument();
    });

    it('should trigger onBlur event as a numberformat input', async () => {
      const fn = jest.fn();
      render({ onBlur: fn, formatting: { number: { prefix: '$' } } });
      const element = screen.getByRole('textbox');
      await user.click(element);
      expect(element).toHaveFocus();
      await user.tab();
      expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should trigger onChange event once per change as a numberformat input', async () => {
      const fn = jest.fn();
      render({ onChange: fn, formatting: { number: { prefix: '$' } } });
      const element = screen.getByRole('textbox');
      await user.click(element);
      expect(element).toHaveFocus();
      await user.keyboard('1234');
      expect(fn).toHaveBeenCalledTimes(4);
    });

    it('should trigger onChange event and update with unformatted value', async () => {
      let testValue;
      const onChange = (obj: any) => {
        testValue = obj.target.value;
      };
      render({
        onChange: onChange,
        formatting: { number: { prefix: '$', thousandSeparator: ' ' } },
      });
      const element = screen.getByRole('textbox');
      await user.click(element);
      expect(element).toHaveFocus();
      await user.keyboard('1234');
      expect(screen.getByDisplayValue('$1 234')).toBeInTheDocument();
      expect(testValue).toBe('1234');
    });
  });
});

const render = (props: Partial<ITextFieldProps> = {}) => {
  const allProps = {
    id: 'id',
    ...props,
  };

  renderRtl(<TextField {...allProps} />);
};
