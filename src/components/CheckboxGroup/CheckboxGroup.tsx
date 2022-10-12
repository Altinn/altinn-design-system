import React, { useEffect, useReducer } from 'react';
import cn from 'classnames';

import { Checkbox, ErrorMessage } from '@/components';
import type { CheckboxProps } from '@/components/Checkbox/Checkbox';

import classes from './CheckboxGroup.module.css';

export type CheckboxItem = Pick<
  CheckboxProps,
  'checked' | 'description' | 'disabled' | 'checkboxId' | 'label'
> &
  Required<Pick<CheckboxProps, 'name'>>;

export enum CheckboxGroupVariant {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

export type CheckedNames = string[];

export interface CheckboxGroupProps {
  compact?: boolean;
  description?: string;
  disabled?: boolean;
  error?: React.ReactNode;
  items: CheckboxItem[];
  legend?: string;
  onChange?: (names: CheckedNames) => void;
  variant?: CheckboxGroupVariant;
}

type ReducerAction =
  | { type: 'check' | 'uncheck'; name: string }
  | { type: 'reset'; state: CheckedNames };

const reducer = (state: CheckedNames, action: ReducerAction) => {
  switch (action.type) {
    case 'check':
      return state.concat([action.name]);
    case 'uncheck':
      return state.filter((name) => name !== action.name);
    case 'reset':
      return action.state;
  }
};
const checkedItems = (items: CheckboxItem[]) =>
  items.filter(({ checked }) => checked).map(({ name }) => name);

export const CheckboxGroup = ({
  compact,
  description,
  disabled,
  error,
  items,
  legend,
  onChange,
  variant = CheckboxGroupVariant.Vertical,
}: CheckboxGroupProps) => {
  const allNames = items.map((item) => item.name);
  if (allNames.length !== new Set(allNames).size) {
    throw Error('Each name in the checkbox group must be unique.');
  }

  const [checkedNames, dispatch] = useReducer(reducer, checkedItems(items));

  useEffect(
    () => dispatch({ type: 'reset', state: checkedItems(items) }),
    [items],
  );

  useEffect(
    () => (onChange && !disabled ? onChange(checkedNames) : undefined),
    [checkedNames, onChange, disabled],
  );

  return (
    <fieldset
      className={cn(
        classes['checkbox-group'],
        compact && classes['checkbox-group--compact'],
        disabled && classes['checkbox-group--disabled'],
      )}
    >
      {legend && (
        <legend className={classes['checkbox-group__legend']}>{legend}</legend>
      )}
      {description && (
        <p className={classes['checkbox-group__description']}>{description}</p>
      )}
      <div
        className={cn(
          classes['checkbox-group__list'],
          classes[`checkbox-group__list--${variant}`],
        )}
      >
        {items.map((item) => (
          <Checkbox
            checkboxId={item.checkboxId}
            checked={checkedNames.includes(item.name)}
            compact={compact}
            description={item.description}
            disabled={disabled || item.disabled}
            error={!!error}
            key={item.name}
            label={item.label}
            name={item.name}
            onChange={(event) => {
              dispatch({
                type: event.target.checked ? 'check' : 'uncheck',
                name: item.name,
              });
            }}
          />
        ))}
      </div>
      {error && (
        <div className={classes['checkbox-group__error-message']}>
          <ErrorMessage>{error}</ErrorMessage>
        </div>
      )}
    </fieldset>
  );
};
