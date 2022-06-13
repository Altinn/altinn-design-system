import React from 'react';
import cn from 'classnames';

import classes from './Accordion.module.css';

export interface AccordionChangeProps {
  isCollapsed: boolean;
}

export type AccordionChangeHandler = ({ isCollapsed: isExpanded }: AccordionChangeProps) => void;

export interface AccordionProps {
  children?: React.ReactNode;
  onCollapse: AccordionChangeHandler;
  isCollapsed: boolean;
}

export const Accordion = ({ children, onCollapse, isCollapsed }: AccordionProps) => {
  return (
    <div className={cn(classes['accordion'])} onClick={onCollapse}>
      {!isCollapsed && children}
    </div>
  );
};
