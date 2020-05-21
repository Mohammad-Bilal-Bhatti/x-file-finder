import React from "react";
import * as pagination from "../../common/pagination";
const Pagination = (props) => {
  const { selected, pageSize, totalItems, onPageClick } = props;
  const pages = pagination.default.genPageNumbers(totalItems, pageSize);
  return (
    <nav>
      <ul className="pagination pagination-lg">
        {pages.map((page) => (
          <li
            key={page}
            className={page === selected ? "page-item active" : "page-item"}
            onClick={() => onPageClick(page)}
          >
            <span className="page-link hand-cursor">{page}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
