import React from "react";
import TableHead from "./tablehead";
import TableBody from "./tablebody";
const Table = (props) => {
  const {
    columns,
    data,
    onDelete,
    onOpen,
    onInfo,
    sortedColumn,
    onColumnSort,
  } = props;
  return (
    <div className="table-responsive container">
      <table className="table table-striped table-hover custom-light-dark mb-4">
        <TableHead
          columns={columns}
          sortedColumn={sortedColumn}
          onColumnSort={onColumnSort}
        />
        <TableBody
          data={data}
          onDelete={onDelete}
          onOpen={onOpen}
          onInfo={onInfo}
        />
      </table>
    </div>
  );
};

export default Table;
