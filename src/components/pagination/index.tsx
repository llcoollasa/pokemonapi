import React, { FC } from "react";
import {
  PAGINATION_LIMIT_RECORDS_PER_PAGE,
  PAGINATION_TOTAL_LINKS_TO_DISPLAY,
} from "../../configs";
import "./index.css";

// Move to interface.ts in case no of interfaces increases
interface PaginationInput {
  count: number;
  currentPage: number;
  clickOnPageCallback: CallableFunction;
}

/*
  Pagination will create the links using the configurations.
  It will update the link when user goes either direction.
  Logic will keep the selected link at the middle, previous numbers at the beginning 
  and following numbers at last.
*/
export const Pagination: FC<PaginationInput> = ({
  count,
  currentPage,
  clickOnPageCallback,
}) => {
  const totalPages = Math.ceil(count / PAGINATION_LIMIT_RECORDS_PER_PAGE);
  const midPoint = Math.ceil(PAGINATION_TOTAL_LINKS_TO_DISPLAY / 2);
  const preDeduct = midPoint - 1;
  const postAdd = midPoint;

  let startAt = currentPage - preDeduct;
  let endAt = totalPages <= postAdd ? totalPages : currentPage + postAdd;

  startAt = startAt < 1 ? 1 : startAt;
  startAt =
    endAt <= totalPages
      ? startAt
      : totalPages - (PAGINATION_TOTAL_LINKS_TO_DISPLAY - 1);

  const totalPagesToDisplay =
    totalPages <= PAGINATION_TOTAL_LINKS_TO_DISPLAY
      ? totalPages
      : PAGINATION_TOTAL_LINKS_TO_DISPLAY;
      
  const displayNumbers = Array.from(
    { length: totalPagesToDisplay },
    (_, index) => index + startAt
  );

  let offset = 0;

  return (
    <div className="pagination">
      {displayNumbers.map((pos) => {
        const searchParams = `?offset=${offset}&limit=${PAGINATION_LIMIT_RECORDS_PER_PAGE}`;
        offset = pos * PAGINATION_LIMIT_RECORDS_PER_PAGE;

        return (
          <button
            onClick={() => clickOnPageCallback(searchParams, pos)}
            key={pos}
          >
            {pos}
          </button>
        );
      })}
    </div>
  );
};
