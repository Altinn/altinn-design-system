import React, { useState } from 'react';
import cn from 'classnames';

import classes from './Pagination.module.css';
import { ReactComponent as NavigateNextIcon } from './navigate_next.svg';
import { ReactComponent as NavigateBeforeIcon } from './navigate_before.svg';
import { ReactComponent as FirstPageIcon } from './first_page.svg';
import { ReactComponent as LastPageIcon } from './last_page.svg';

export interface PaginationProps {
  numberOfPages: number;
}

export const Pagination = ({ numberOfPages }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const increaseCurrentPage = () => {
    if (currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const decreaseCurrentPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <FirstPageIcon
        className={cn(classes['pagination-icon'], {
          [classes['pagination-icon--disabled']]: currentPage === 1,
        })}
        onClick={() => setCurrentPage(1)}
      />
      <NavigateBeforeIcon
        className={cn(classes['pagination-icon'], {
          [classes['pagination-icon--disabled']]: currentPage === 1,
        })}
        onClick={() => decreaseCurrentPage()}
      />
      <NavigateNextIcon
        className={cn(classes['pagination-icon'], {
          [classes['pagination-icon--disabled']]: currentPage === numberOfPages,
        })}
        onClick={() => increaseCurrentPage()}
      />
      <LastPageIcon
        className={cn(classes['pagination-icon'], {
          [classes['pagination-icon--disabled']]: currentPage === numberOfPages,
        })}
        onClick={() => setCurrentPage(numberOfPages)}
      />
    </>
  );
};
