import React from "react";
import PropTypes from "prop-types";

function Pagination(props) {
  const { totalMovies, itemsPerPage, onPageChange, currentPage } = props;
  const totalPages = Math.ceil(totalMovies / itemsPerPage);

  if (totalPages === 1) return null;

  /**
   * Other option is to use lodash package
   * _.range(1, totalPages+1) => [1,2,3]
   */
  let pages = [];
  for (let index = 1; index <= totalPages; index++) {
    pages.push(index);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map(page => (
          <li
            className={"page-item" + (page === currentPage ? " active" : "")}
            key={page}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  totalMovies: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
