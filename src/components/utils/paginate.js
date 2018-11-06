export default function paginate(movies, currentPage, itemsPerPage) {
  const startIndex = (currentPage - 1) * itemsPerPage;

  /**
   * by using lodash we can serve this by
   * _(movies).slice(startIndex).take(itemsPerPage).value();
   */
  return movies.slice(startIndex, startIndex + itemsPerPage);
}
