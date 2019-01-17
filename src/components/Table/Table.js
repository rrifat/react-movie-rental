import React from "react";
import TableHeader from "../TableHeader/TableHeader";
import TableBody from "../TableBody/TableBody";

function Table({ movies, onSort, sortColumn, columns }) {
  return (
    <table className="table">
      <TableHeader onSort={onSort} sortColumn={sortColumn} columns={columns} />
      <TableBody movies={movies} columns={columns} />
    </table>
  );
}

export default Table;
