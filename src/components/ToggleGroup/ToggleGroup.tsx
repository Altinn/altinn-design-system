import React from 'react';
import cn from 'classnames';
import { useState } from 'react';
import classes from './ToggleGroup.module.css';

export interface ToggleGroupProps {
  leftLabel: string;
  rightLabel: string;
}

export const ToggleGroup = ({
  leftLabel: leftLabel,
  rightLabel: rightLabel,
}: ToggleGroupProps) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={cn(classes['toggle-group'])}>
      <div className={cn(classes['toggle-group__div'])} role='radiogroup'>
        {toggle ? (
          <div>
            <button
              role='radio'
              className={cn(classes['toggle-group__button'])}
             onClick={() => setToggle(false)}
            >
              <span className={cn(classes['toggle-group__label'])}>{leftLabel}</span>
            </button>
            <button
              role='radio'
              className={cn(
                classes['toggle-group__button--active'],
                classes['toggle-group__button'],
              )}
            >
              <span className={cn(classes['toggle-group__label'])}>{rightLabel}</span>
            </button>
          </div>
        ) : (
          <div>
            <button
              role='radio'
              className={cn(
                classes['toggle-group__button--active'],
                classes['toggle-group__button'],
              )}
            >
              <span className={cn(classes['toggle-group__label'])}>{leftLabel}</span>
            </button>
            <button
              role='radio'
              onClick={() => setToggle(true)}
              className={cn(classes['toggle-group__button'])}
            >
              <span className={cn(classes['toggle-group__label'])}>{rightLabel}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
