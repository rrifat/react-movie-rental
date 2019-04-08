/* -------------------
    utils.sortyBy()
---------------------- */
function sortBy(items, path, order) {
  if (order.toLowerCase() === "asc") {
    items.sort((a, b) => {
      const { newA, newB } = getValueFromObjPath(path, a, b);
      if (newA < newB) return -1;
      if (newA > newB) return 1;
      return 0;
    });
  }

  if (order.toLowerCase() === "desc") {
    items.sort((a, b) => {
      const { newA, newB } = getValueFromObjPath(path, a, b);
      if (newA < newB) return 1;
      if (newA > newB) return -1;
      return 0;
    });
  }
}

function getValueFromObjPath(path, a, b) {
  var newPath = path.split(".");
  var newA = newPath.length > 1 ? a[newPath[0]][newPath[1]] : a[newPath[0]];
  var newB = newPath.length > 1 ? b[newPath[0]][newPath[1]] : b[newPath[0]];

  return {
    newA,
    newB
  };
}

/* -------------------
    utils.paginate()
---------------------- */
function paginate(movies, currentPage, itemsPerPage) {
  const startIndex = (currentPage - 1) * itemsPerPage;

  /**
   * by using lodash we can serve this by
   * _(movies).slice(startIndex).take(itemsPerPage).value();
   */
  return movies.slice(startIndex, startIndex + itemsPerPage);
}

export { sortBy, paginate };
