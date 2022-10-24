import React from 'react';
import cn from 'classnames';

import { TextField } from '../TextField';

import classes from './SearchField.module.css';

export interface SearchFieldProps {
  greeting?: string; // TODO: add props
}

export const SearchField = ({ greeting }: SearchFieldProps) => {
  return <TextField search={true}></TextField>;
};
