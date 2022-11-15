import {
  getVariant,
  InputVariant,
  IconVariant,
  ReadOnlyVariant,
} from './utils';

describe('InputWrapper utils', () => {
  describe('getVariant', () => {
    it('should return Default inputvariant and no icon by default', () => {
      const result = getVariant();
      expect(result).toEqual({
        variant: InputVariant.Default,
        iconVariant: IconVariant.None,
      });
    });

    it('should return disabled inputvariant and no icon when disabled is true', () => {
      const result = getVariant({ disabled: true });
      expect(result).toEqual({
        variant: InputVariant.Disabled,
        iconVariant: IconVariant.None,
      });
    });

    it('should return ReadOnlyInfo inputvariant and no icon when readonly is true', () => {
      const result = getVariant({ readOnly: true });
      expect(result).toEqual({
        variant: InputVariant.ReadOnlyInfo,
        iconVariant: IconVariant.None,
      });
    });

    it('should return ReadOnlyInfo inputvariant and no icon when readonly is ReadOnlyVariant.ReadOnlyInfo', () => {
      const result = getVariant({ readOnly: ReadOnlyVariant.ReadOnlyInfo });
      expect(result).toEqual({
        variant: InputVariant.ReadOnlyInfo,
        iconVariant: IconVariant.None,
      });
    });

    it('should return ReadOnlyConfirm inputvariant and no icon when readonly is ReadOnlyVariant.ReadOnlyConfirm', () => {
      const result = getVariant({ readOnly: ReadOnlyVariant.ReadOnlyConfirm });
      expect(result).toEqual({
        variant: InputVariant.ReadOnlyConfirm,
        iconVariant: IconVariant.None,
      });
    });

    it('should return Error inputvariant and Error icon when isValid is false and withErrorIcon is true', () => {
      const result = getVariant({ isValid: false, withErrorIcon: true });
      expect(result).toEqual({
        variant: InputVariant.Error,
        iconVariant: IconVariant.Error,
      });
    });

    it('should return Error inputvariant without Error icon when isValid is false and withErrorIcon is false', () => {
      const result = getVariant({ isValid: false, withErrorIcon: false });
      expect(result).toEqual({
        variant: InputVariant.Error,
        iconVariant: IconVariant.None,
      });
    });
  });
});
