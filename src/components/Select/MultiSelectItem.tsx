import React from 'react';

import classes from './MultiSelectItem.module.css';

export interface MultiSelectItemProps {
  deleteButtonLabel?: string;
  disabled: boolean;
  onDeleteButtonClick: () => void;
  value: string;
}

export const MultiSelectItem = ({
  deleteButtonLabel,
  disabled,
  onDeleteButtonClick,
  value,
}: MultiSelectItemProps) => (
  <span className={classes['multi-select-item']}>
    <span>{value}</span>
    <button
      aria-label={deleteButtonLabel}
      className={classes['multi-select-item__delete-button']}
      disabled={disabled}
      onClick={onDeleteButtonClick}
    >
      <span className={classes['multi-select-item__delete-button__cross']} />
    </button>
  </span>
);
