import React from "react";
const TableHead = (props) => {
  const { columns, sortedColumn, onColumnSort } = props;
  return (
    <thead className="thead-dark">
      <tr>
        {columns.map((col) => (
          <th
            className="hand-cursor"
            key={col.key}
            onClick={() => onColumnSort(col.key)}
            scope="col"
          >
            {col.label}
            {col.key === sortedColumn.name && sortedColumn.asc && (
              <i className="fa fa-sort-asc"></i>
            )}
            {col.key === sortedColumn.name && !sortedColumn.asc && (
              <i className="fa fa-sort-desc"></i>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
