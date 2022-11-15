export enum InputVariant {
  Default = 'default',
  Error = 'error',
  Disabled = 'disabled',
  ReadOnlyInfo = 'readonly-info',
  ReadOnlyConfirm = 'readonly-confirm',
}

export enum ReadOnlyVariant {
  ReadOnlyInfo = 'readonly-info',
  ReadOnlyConfirm = 'readonly-confirm',
}

export enum IconVariant {
  None = 'none',
  Error = 'error',
  Search = 'search',
}

interface GetVariantProps {
  readOnly?: boolean | ReadOnlyVariant;
  disabled?: boolean;
  isValid?: boolean;
  isSearch?: boolean;
  withErrorIcon?: boolean;
}

export const getVariant = ({
  readOnly = false,
  disabled = false,
  isValid = true,
  isSearch = false,
  withErrorIcon = false,
}: GetVariantProps = {}) => {
  const iconVariant = isSearch ? IconVariant.Search : IconVariant.None;

  if (disabled) {
    return {
      variant: InputVariant.Disabled,
      iconVariant,
    };
  } else if (readOnly === true || readOnly === ReadOnlyVariant.ReadOnlyInfo) {
    return {
      variant: InputVariant.ReadOnlyInfo,
      iconVariant,
    };
  } else if (readOnly === ReadOnlyVariant.ReadOnlyConfirm) {
    return {
      variant: InputVariant.ReadOnlyConfirm,
      iconVariant,
    };
  } else if (isValid === false) {
    return {
      variant: InputVariant.Error,
      iconVariant: withErrorIcon ? IconVariant.Error : IconVariant.None,
    };
  }

  return {
    variant: InputVariant.Default,
    iconVariant,
  };
};
