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
  descriptionTexts: DescriptionText;
}
export interface DescriptionText {
  rowsPerPage: string;
  of: string;
  navigateFirstPage: string;
  previousPage: string;
  nextPage: string;
  navigateLastPage: string;
}

export const Pagination = ({
  numberOfRows,
  rowsPerPageOptions,
  rowsPerPage,
  onRowsPerPageChange,
  currentPage,
  setCurrentPage,
  descriptionTexts,
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
        className={cn(classes['description-text'])}
        data-testid='description-text'
      >
        {`${firstRowNumber}-${lastRowNumber} ${descriptionTexts['of']} ${numberOfRows}`}
      </span>
    );
  };

  return (
    <div className={cn(classes['pagination-wrapper'])}>
      <div className={cn(classes['pagination-wrapper-row'])}>
        <span
          style={{ marginRight: '26px' }}
          id='number-of-rows-select'
          aria-hidden='true'
        >
          {descriptionTexts['rowsPerPage']}
        </span>
        <select
          className={cn(classes['select-pagination'])}
          value={rowsPerPage}
          onChange={(event) => onRowsPerPageChange(event)}
          aria-labelledby='number-of-rows-select'
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
      </div>
      <div className={cn(classes['pagination-wrapper-row'])}>
        <button
          className={cn(classes['icon-button'])}
          onClick={() => setCurrentPage(0)}
          disabled={currentPage === 0}
          aria-label={descriptionTexts['navigateFirstPage']}
          data-testid='first-page-icon'
        >
          <FirstPageIcon
            className={cn(classes['pagination-icon'], {
              [classes['pagination-icon--disabled']]: currentPage === 0,
            })}
          />
        </button>
        <button
          className={cn(classes['icon-button'])}
          onClick={() => decreaseCurrentPage()}
          disabled={currentPage === 0}
          aria-label={descriptionTexts['previousPage']}
          data-testid='pagination-previous-icon'
        >
          <NavigateBeforeIcon
            className={cn(classes['pagination-icon'], {
              [classes['pagination-icon--disabled']]: currentPage === 0,
            })}
          />
        </button>
        <button
          className={cn(classes['icon-button'])}
          onClick={() => increaseCurrentPage()}
          disabled={currentPage === numberOfPages - 1}
          aria-label={descriptionTexts['nextPage']}
          data-testid='pagination-next-icon'
        >
          <NavigateNextIcon
            className={cn(classes['pagination-icon'], {
              [classes['pagination-icon--disabled']]:
                currentPage === numberOfPages - 1,
            })}
          />
        </button>
        <button
          className={cn(classes['icon-button'])}
          onClick={() => setCurrentPage(numberOfPages - 1)}
          disabled={currentPage === numberOfPages - 1}
          aria-label={descriptionTexts['navigateLastPage']}
        >
          <LastPageIcon
            className={cn(classes['pagination-icon'], {
              [classes['pagination-icon--disabled']]:
                currentPage === numberOfPages - 1,
            })}
          />
        </button>
      </div>
    </div>
  );
};
