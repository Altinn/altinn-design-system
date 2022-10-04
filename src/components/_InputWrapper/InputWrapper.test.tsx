import { render as renderRtl, screen } from '@testing-library/react';
import React from 'react';

import type { InputWrapperProps } from './InputWrapper';
import { InputWrapper } from './InputWrapper';
import { ReadOnlyVariant, InputVariant } from './utils';

const getClassNames = (expectedClassName: string) => {
  const otherClassNames = Object.values(InputVariant).filter(
    (v) => v !== expectedClassName,
  );

  return { expectedClassName, otherClassNames };
};

describe('InputWrapper', () => {
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

      const textField = screen.getByTestId('InputWrapper');

      expect(
        textField.classList.contains(`InputWrapper--${expectedClassName}`),
      ).toBe(true);
      otherClassNames.forEach((v) => {
        expect(textField.classList.contains(`InputWrapper--${v}`)).toBe(false);
      });
    });

    it('should render with correct classname when isValid is true and readOnly or disabled is not specified', () => {
      render({ isValid: true });
      const { expectedClassName, otherClassNames } = getClassNames(
        InputVariant.Default,
      );

      const textField = screen.getByTestId('InputWrapper');

      expect(
        textField.classList.contains(`InputWrapper--${expectedClassName}`),
      ).toBe(true);
      otherClassNames.forEach((v) => {
        expect(textField.classList.contains(`InputWrapper--${v}`)).toBe(false);
      });
    });

    it('should render with correct classname when readOnly is true and disabled is not specified', () => {
      render({ readOnly: true });
      const { expectedClassName, otherClassNames } = getClassNames(
        InputVariant.ReadOnlyInfo,
      );

      const textField = screen.getByTestId('InputWrapper');

      expect(
        textField.classList.contains(`InputWrapper--${expectedClassName}`),
      ).toBe(true);
      otherClassNames.forEach((v) => {
        expect(textField.classList.contains(`InputWrapper--${v}`)).toBe(false);
      });
    });

    it('should render with correct classname when readOnly is <readonly-confirm> and disabled is not specified', () => {
      render({ readOnly: ReadOnlyVariant.ReadOnlyConfirm });
      const { expectedClassName, otherClassNames } = getClassNames(
        InputVariant.ReadOnlyConfirm,
      );

      const textField = screen.getByTestId('InputWrapper');

      expect(
        textField.classList.contains(`InputWrapper--${expectedClassName}`),
      ).toBe(true);
      otherClassNames.forEach((v) => {
        expect(textField.classList.contains(`InputWrapper--${v}`)).toBe(false);
      });
    });

    it('should render with correct classname when readOnly is <readonly-info> and disabled is not specified', () => {
      render({ readOnly: ReadOnlyVariant.ReadOnlyInfo });
      const { expectedClassName, otherClassNames } = getClassNames(
        InputVariant.ReadOnlyInfo,
      );

      const textField = screen.getByTestId('InputWrapper');

      expect(
        textField.classList.contains(`InputWrapper--${expectedClassName}`),
      ).toBe(true);
      otherClassNames.forEach((v) => {
        expect(textField.classList.contains(`InputWrapper--${v}`)).toBe(false);
      });
    });

    it('should render with correct classname when disabled is true', () => {
      render({ disabled: true });
      const { expectedClassName, otherClassNames } = getClassNames(
        InputVariant.Disabled,
      );

      const textField = screen.getByTestId('InputWrapper');

      expect(
        textField.classList.contains(`InputWrapper--${expectedClassName}`),
      ).toBe(true);
      otherClassNames.forEach((v) => {
        expect(textField.classList.contains(`InputWrapper--${v}`)).toBe(false);
      });
    });
  });
});

const render = (props: Partial<InputWrapperProps> = {}) => {
  const allProps = {
    inputRenderer: ({ className }) => <input className={className} />,
    ...props,
  } as InputWrapperProps;

  return renderRtl(<InputWrapper {...allProps} />);
};
