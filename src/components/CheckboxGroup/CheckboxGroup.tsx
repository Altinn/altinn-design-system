import React, { useEffect, useId, useReducer } from 'react';
import cn from 'classnames';

import { Checkbox, ErrorMessage } from '@/components';

import classes from './CheckboxGroup.module.css';

export interface CheckboxItem {
  checked?: boolean;
  description?: string;
  disabled?: boolean;
  id?: string;
  label?: string;
  name: string;
}

export enum CheckboxGroupVariant {
  Vertical = 'vertical',
  Horisontal = 'horisontal',
}

export type CheckedNames = string[];

export interface CheckboxGroupProps {
  compact?: boolean;
  description?: string;
  disabled?: boolean;
  error?: string;
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

  const randomId = useId();

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
    <div
      className={cn(
        classes.wrapper,
        error && classes['wrapper--error'],
        compact && classes['wrapper--compact'],
        disabled && classes['wrapper--disabled'],
      )}
    >
      {error && <div className={classes['wrapper--error__line']} />}
      <fieldset className={classes['checkbox-group']}>
        {legend && <legend>{legend}</legend>}
        {description && (
          <p className={classes['checkbox-group__description']}>
            {description}
          </p>
        )}
        <div
          className={cn(
            classes['checkbox-group__list'],
            classes[`checkbox-group__list--${variant}`],
          )}
        >
          {items.map((item, index) => (
            <div key={`checkbox-group-${randomId}-${index}`}>
              <Checkbox
                checkboxId={item.id}
                checked={checkedNames.includes(item.name)}
                compact={compact}
                description={item.description}
                disabled={disabled || item.disabled}
                error={!!error}
                label={item.label}
                name={item.name}
                onChange={(event) => {
                  dispatch({
                    type: event.target.checked ? 'check' : 'uncheck',
                    name: item.name,
                  });
                }}
              />
            </div>
          ))}
        </div>
        {error && (
          <div className={classes['checkbox-group__error-message']}>
            <ErrorMessage>{error}</ErrorMessage>
          </div>
        )}
      </fieldset>
    </div>
  );
};
