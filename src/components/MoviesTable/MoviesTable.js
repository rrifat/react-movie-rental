import React from "react";
import { Link } from "react-router-dom";
import Like from "../Like/Like";
import Table from "../Table/Table";

function MoviesTable(props) {
  const { moviesPerPage, onLike, onDelete, onSort, sortColumn } = props;
  const columns = [
    {
      path: "title",
      label: "Ttitle",
      content: movie => <Link to={`/movie/${movie._id}`}>{movie.title}</Link>
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      label: "Like",
      content: movie => (
        <Like liked={movie.liked} onChange={() => onLike(movie)} />
      )
    },
    {
      key: "action",
      label: "Action",
      content: movie => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(movie._id)}
        >
          Delete
        </button>
      )
    }
  ];

  return (
    <Table
      movies={moviesPerPage}
      onSort={onSort}
      sortColumn={sortColumn}
      columns={columns}
    />
  );
}

export default MoviesTable;
