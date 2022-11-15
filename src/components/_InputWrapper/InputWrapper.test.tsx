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

    it('should not show error-icon when isValid is true and withErrorIcon is true', () => {
      render({ isValid: true, withErrorIcon: true });
      expect(screen.queryByTestId('input-icon-error')).not.toBeInTheDocument();
    });

    it('should not show error-icon when isValid is true and readOnly is true', () => {
      render({ isValid: true, readOnly: true });
      expect(screen.queryByTestId('input-icon-error')).not.toBeInTheDocument();
    });

    it('should not show error-icon when isValid is true, withErrorIcon is true and readOnly is true', () => {
      render({ isValid: true, readOnly: true, withErrorIcon: true });
      expect(screen.queryByTestId('input-icon-error')).not.toBeInTheDocument();
    });

    it('should not show error-icon when isValid is true and disabled is true', () => {
      render({ isValid: true, disabled: true });
      expect(screen.queryByTestId('input-icon-error')).not.toBeInTheDocument();
    });

    it('should not show error-icon when isValid is true, withErrorIcon is true and disabled is true', () => {
      render({ isValid: true, disabled: true, withErrorIcon: true });
      expect(screen.queryByTestId('input-icon-error')).not.toBeInTheDocument();
    });

    it('should not show error-icon when isValid is false and withErrorIcon is not set', () => {
      render({ isValid: false });
      expect(screen.queryByTestId('input-icon-error')).not.toBeInTheDocument();
    });

    it('should not show error-icon when isValid is false and withErrorIcon is false', () => {
      render({ isValid: false, withErrorIcon: false });
      expect(screen.queryByTestId('input-icon-error')).not.toBeInTheDocument();
    });

    it('should show error-icon when isValid is false and withErrorIcon is true', () => {
      render({ isValid: false, withErrorIcon: true });
      expect(screen.queryByTestId('input-icon-error')).toBeInTheDocument();
    });
  });

  describe('search-icon', () => {
    it('should not show search-icon when search is false', () => {
      render({ isSearch: false });
      expect(screen.queryByTestId('input-icon-search')).not.toBeInTheDocument();
    });

    it('should not show search-icon when search is false', () => {
      render({ isSearch: true });
      expect(screen.queryByTestId('input-icon-search')).toBeInTheDocument();
    });

    it('should not show search-icon when isValid is false', () => {
      render({ isValid: false });
      expect(screen.queryByTestId('input-icon-search')).not.toBeInTheDocument();
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

    it('Renders with padding class by default', () => {
      render();
      const { classList } = screen.getByTestId('InputWrapper');
      expect(classList).toContain('InputWrapper--with-padding');
    });

    it('Renders without padding class when "noPadding" property is true', () => {
      render({ noPadding: true });
      const { classList } = screen.getByTestId('InputWrapper');
      expect(classList).not.toContain('InputWrapper--with-padding');
    });

    it('Renders with focus-effect class by default', () => {
      render();
      const { classList } = screen.getByTestId('InputWrapper');
      expect(classList).toContain('InputWrapper--with-focus-effect');
    });

    it('Renders without focus-effect class when "noFocusEffect" property is true', () => {
      render({ noFocusEffect: true });
      const { classList } = screen.getByTestId('InputWrapper');
      expect(classList).not.toContain('InputWrapper--with-focus-effect');
    });
  });

  describe('Label', () => {
    it('should show label when label is set', () => {
      const label = 'Label is here';
      render({ label });
      expect(screen.queryByText(label)).toBeInTheDocument();
    });

    it('should not show label when label is not set', () => {
      render({ label: undefined });
      expect(
        screen.queryByTestId('InputWrapper-label'),
      ).not.toBeInTheDocument();
    });

    it('Attaches label to input element when inputId is not set', () => {
      const label = 'Label is here';
      render({ label });
      expect(screen.getByLabelText(label)).toHaveAttribute('id');
    });

    it('Attaches label to input element when inputId is set', () => {
      const inputId = 'some-unique-id';
      const label = 'Label is here';
      render({ inputId, label });
      expect(screen.getByLabelText(label)).toHaveAttribute('id', inputId);
    });
  });
});

const render = (props: Partial<InputWrapperProps> = {}) => {
  const allProps = {
    inputRenderer: ({ className, inputId }) => (
      <input
        className={className}
        id={inputId}
      />
    ),
    ...props,
  } as InputWrapperProps;

  return renderRtl(<InputWrapper {...allProps} />);
};
