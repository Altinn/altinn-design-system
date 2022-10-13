import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import classes from './Pagination.module.css';
import { ReactComponent as NavigateNextIcon } from './navigate_next.svg';
import { ReactComponent as NavigateBeforeIcon } from './navigate_before.svg';
import { ReactComponent as FirstPageIcon } from './first_page.svg';
import { ReactComponent as LastPageIcon } from './last_page.svg';

export interface PaginationProps {
  numberOfRows: number;
  rowsPerPageOptions: number[];
  rowsPerPage: number;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination = ({
  numberOfRows,
  rowsPerPageOptions,
  rowsPerPage,
  onRowsPerPageChange,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const [numberOfPages, setNumberOfPages] = useState(1);

  useEffect(() => {
    if (numberOfRows < rowsPerPage) setNumberOfPages(1);
    else setNumberOfPages(Math.ceil(numberOfRows / rowsPerPage));
  }, [rowsPerPage, numberOfRows]);

  const increaseCurrentPage = () => {
    if (currentPage < numberOfPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const decreaseCurrentPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPaginationNumbers = () => {
    const firstRowNumber = 1 + currentPage * rowsPerPage;
    const lastRowNumber =
      rowsPerPage * (currentPage + 1) > numberOfRows
        ? numberOfRows
        : rowsPerPage * (currentPage + 1);
    return (
      <p style={{ marginRight: '64px', marginBottom: '0px' }}>
        {`${firstRowNumber}-${lastRowNumber} av ${numberOfRows}`}
      </p>
    );
  };

  return (
    <div className={cn(classes['pagination-wrapper'])}>
      <p style={{ marginRight: '26px', marginBottom: '0px' }}>
        Rader per side{' '}
      </p>
      <select
        style={{ marginRight: '25px' }}
        value={rowsPerPage}
        onChange={(event) => onRowsPerPageChange(event)}
      >
        {rowsPerPageOptions.map((optionValue: number) => (
          <option
            key={optionValue}
            value={optionValue}
          >
            {optionValue}
          </option>
        ))}
      </select>
      {renderPaginationNumbers()}
      <FirstPageIcon
        className={cn(classes['pagination-icon'], {
          [classes['pagination-icon--disabled']]: currentPage === 0,
        })}
        onClick={() => setCurrentPage(0)}
      />
      <NavigateBeforeIcon
        className={cn(classes['pagination-icon'], {
          [classes['pagination-icon--disabled']]: currentPage === 0,
        })}
        onClick={() => decreaseCurrentPage()}
      />
      <NavigateNextIcon
        className={cn(classes['pagination-icon'], {
          [classes['pagination-icon--disabled']]:
            currentPage === numberOfPages - 1,
        })}
        onClick={() => increaseCurrentPage()}
      />
      <LastPageIcon
        className={cn(classes['pagination-icon'], {
          [classes['pagination-icon--disabled']]:
            currentPage === numberOfPages - 1,
        })}
        onClick={() => setCurrentPage(numberOfPages - 1)}
      />
    </div>
  );
};
