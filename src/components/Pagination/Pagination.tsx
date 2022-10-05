import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import classes from './Pagination.module.css';
import { ReactComponent as NavigateNextIcon } from './navigate_next.svg';
import { ReactComponent as NavigateBeforeIcon } from './navigate_before.svg';
import { ReactComponent as FirstPageIcon } from './first_page.svg';
import { ReactComponent as LastPageIcon } from './last_page.svg';

export interface PaginationProps {
  numberOfRows: number;
}

export const Pagination = ({ numberOfRows }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [numberOfPages, setNumberOfPages] = useState(1);

  useEffect(() => {
    if (numberOfRows < rowsPerPage) setNumberOfPages(1);
    else setNumberOfPages(Math.ceil(numberOfRows / rowsPerPage));
    setCurrentPage(1);
  }, [rowsPerPage, numberOfRows]);

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

  const renderPaginationNumbers = () => {
    const firstRowNumber = 1 + (currentPage - 1) * rowsPerPage;
    const lastRowNumber =
      rowsPerPage * currentPage > numberOfRows
        ? numberOfRows
        : rowsPerPage * currentPage;
    return (
      <p style={{ marginRight: '64px' }}>
        {`${firstRowNumber}-${lastRowNumber} av ${numberOfRows}`}
      </p>
    );
  };

  return (
    <div className={cn(classes['pagination-wrapper'])}>
      <p style={{ marginRight: '26px' }}>Rader per side </p>
      <select
        style={{ marginRight: '25px' }}
        value={rowsPerPage}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setRowsPerPage(e.target.value as unknown as number)
        }
      >
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='15'>15</option>
        <option value='20'>20</option>
      </select>
      {renderPaginationNumbers()}
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
    </div>
  );
};
