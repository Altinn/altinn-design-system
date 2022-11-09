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
  setCurrentPage: (page: number) => void;
  rowsPerPageText: string;
  pageDescriptionText: string;
}

export const Pagination = ({
  numberOfRows,
  rowsPerPageOptions,
  rowsPerPage,
  onRowsPerPageChange,
  currentPage,
  setCurrentPage,
  rowsPerPageText,
  pageDescriptionText,
}: PaginationProps) => {
  const [numberOfPages, setNumberOfPages] = useState(1);

  useEffect(() => {
    if (numberOfRows < rowsPerPage) {
      setNumberOfPages(1);
    } else {
      setNumberOfPages(Math.ceil(numberOfRows / rowsPerPage));
    }
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
      <span
        style={{ marginRight: '64px' }}
        data-testid='description-text'
      >
        {`${firstRowNumber}-${lastRowNumber} ${pageDescriptionText} ${numberOfRows}`}
      </span>
    );
  };

  return (
    <div className={cn(classes['pagination-wrapper'])}>
      <span style={{ marginRight: '26px' }}>{rowsPerPageText}</span>
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
        tabIndex={currentPage !== 0 ? 0 : undefined}
        className={cn(classes['pagination-icon'], {
          [classes['pagination-icon--disabled']]: currentPage === 0,
        })}
        onClick={() => setCurrentPage(0)}
        onKeyUp={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            setCurrentPage(0);
          }
        }}
        data-testid='first-page-icon'
      />
      <NavigateBeforeIcon
        tabIndex={currentPage !== 0 ? 0 : undefined}
        className={cn(classes['pagination-icon'], {
          [classes['pagination-icon--disabled']]: currentPage === 0,
        })}
        onClick={() => decreaseCurrentPage()}
        onKeyUp={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            decreaseCurrentPage();
          }
        }}
      />
      <NavigateNextIcon
        tabIndex={currentPage !== numberOfPages - 1 ? 0 : undefined}
        className={cn(classes['pagination-icon'], {
          [classes['pagination-icon--disabled']]:
            currentPage === numberOfPages - 1,
        })}
        onClick={() => increaseCurrentPage()}
        onKeyUp={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            increaseCurrentPage();
          }
        }}
      />
      <LastPageIcon
        tabIndex={currentPage !== numberOfPages - 1 ? 0 : undefined}
        className={cn(classes['pagination-icon'], {
          [classes['pagination-icon--disabled']]:
            currentPage === numberOfPages - 1,
        })}
        onClick={() => setCurrentPage(numberOfPages - 1)}
        onKeyUp={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            setCurrentPage(numberOfPages - 1);
          }
        }}
      />
    </div>
  );
};
