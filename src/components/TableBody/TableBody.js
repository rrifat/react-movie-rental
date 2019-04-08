import React from "react";
import _ from "lodash";

function TableBody({ movies, columns }) {
  return (
    <tbody>
      {movies.map(movie => (
        <tr key={movie._id}>
          {columns.map(column => (
            <td key={column.path || column.key}>
              {renderContent(movie, column)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

function renderContent(movie, column) {
  if (column.content) return column.content(movie);
  /**
   * we can get using default movie["title"]/movie["numberInStock"] but
   * when need to access nested property like movie["genre.name"] we can't
   * that's the reason to use _.get(movie, "title") lodash property
   */

  return _.get(movie, column.path);
}

export default TableBody;
