import React from 'react';

import classes from './MultiSelectItem.module.css';

export interface MultiSelectItemProps {
  deleteButtonLabel?: string;
  disabled: boolean;
  onDeleteButtonClick: () => void;
  label: string;
}

export const MultiSelectItem = ({
  deleteButtonLabel,
  disabled,
  onDeleteButtonClick,
  label,
}: MultiSelectItemProps) => (
  <span className={classes['altinn-multi-select-item']}>
    <span>{label}</span>
    <button
      aria-label={deleteButtonLabel}
      className={classes['altinn-multi-select-item__delete-button']}
      disabled={disabled}
      onClick={onDeleteButtonClick}
    >
      <span
        className={classes['altinn-multi-select-item__delete-button__cross']}
      />
    </button>
  </span>
);
