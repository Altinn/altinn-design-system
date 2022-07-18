export enum InputVariant {
  Default = 'default',
  Error = 'error',
  Disabled = 'disabled',
  ReadonlyInfo = 'readonly-info',
  ReadonlyConfirm = 'readonly-confirm',
}

export enum ReadOnlyVariant {
  ReadonlyInfo = 'readonly-info',
  ReadonlyConfirm = 'readonly-confirm',
}

export enum IconVariant {
  None = 'none',
  Error = 'error',
}

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
  } else if (readOnly === true || readOnly === ReadOnlyVariant.ReadonlyInfo) {
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
