import { ReadOnlyVariant, IconVariant, InputVariant } from './TextField';

export const getVariants = (
  readOnly?: boolean | ReadOnlyVariant,
  disabled?: boolean,
  isValid?: boolean,
) => {
  if (disabled) {
    return {
      variant: InputVariant.Disabled,
      iconVariant: IconVariant.None,
    };
  } else if (readOnly === true) {
    return {
      variant: InputVariant.ReadonlyInfo,
      iconVariant: IconVariant.None,
    };
  } else if (readOnly === ReadOnlyVariant.ReadonlyInfo) {
    return {
      variant: InputVariant.ReadonlyInfo,
      iconVariant: IconVariant.None,
    };
  } else if (readOnly === ReadOnlyVariant.ReadonlyConfirm) {
    return {
      variant: InputVariant.ReadonlyConfirm,
      iconVariant: IconVariant.None,
    };
  } else if (!isValid) {
    return {
      variant: InputVariant.Error,
      iconVariant: IconVariant.Error,
    };
  }

  return {
    variant: InputVariant.Default,
    iconVariant: IconVariant.None,
  };
};
