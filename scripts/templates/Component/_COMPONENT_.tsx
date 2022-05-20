import React from 'react';
import cn from 'classnames';

import classes from './_COMPONENT_.module.css';

export interface _COMPONENT_Props {
  greeting?: string; // TODO: add props
}

export const _COMPONENT_ = ({ greeting }: _COMPONENT_Props) => {
  return (
    <div className={cn(classes._COMPONENT_)}>{greeting} from _COMPONENT_</div>
  );
};
