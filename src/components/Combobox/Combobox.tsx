import React, { type ReactElement } from 'react';
import {
  type ComboboxProps as rcbProps,
  Combobox as RCombobox,
  ComboboxOption,
  ComboboxList,
  ComboboxInput,
} from '@reach/combobox';

export interface ComboboxOption {
  value: string;
  label: ReactElement | number | string;
}

export interface ComboboxProps extends rcbProps {
  inputId: string;
  options: ComboboxOption[];
}

export const Combobox = ({ inputId, options }: ComboboxProps) => {
  return (
    <RCombobox>
      <ComboboxInput
        id={inputId}
        value={'Select Some'}
      />
      <ComboboxList>
        {options.map(({ value, label }) => (
          <ComboboxOption
            key={value}
            value={value}
          >
            {label}
          </ComboboxOption>
        ))}
      </ComboboxList>
    </RCombobox>
  );
};
