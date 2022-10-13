import React from 'react';
import cn from 'classnames';

import classes from './TableFooter.module.css';
import { Variant, TableRowTypeContext } from './Context';

export interface TableFooterProps {
  children?: React.ReactNode;
}

export const TableFooter = ({ children }: TableFooterProps) => {
  const variant = Variant.Footer;
  return (
    <TableRowTypeContext.Provider value={{ variant }}>
      <tfoot className={cn(classes['table-footer'])}>{children}</tfoot>
    </TableRowTypeContext.Provider>
  );
};

export default TableFooter;
