import React, { Component } from "react";
import { getMovies } from "../../services/fake-movie-service";
import Pagination from "../Pagination/Pagination";
import paginate from "../utils/paginate";
import Genres from "../Genres/Genres";
import { getGenres } from "../../services/fake-genre-service";
import MoviesTable from "../MoviesTable/MoviesTable";
import { sortBy } from "../utils/sort";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentPage: 1,
      itemsPerPage: 4,
      genres: [],
      sortColumn: { path: "title", order: "asc" }
    };

    this.handleDeleteMovie = this.handleDeleteMovie.bind(this);
    this.handleLikedValue = this.handleLikedValue.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSelectGenre = this.handleSelectGenre.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  handleDeleteMovie(id) {
    const movies = this.state.movies.filter(movie => movie._id !== id);
    this.setState({ movies });
  }

  handleLikedValue(movie) {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);

    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  }

  handlePageChange(page) {
    this.setState({ currentPage: page });
  }

  handleSelectGenre(genre) {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  }

  handleSort(path) {
    this.setState({ sortColumn: { path, order: "asc" } });
  }
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres
    });
  }

  render() {
    const {
      movies,
      currentPage,
      itemsPerPage,
      selectedGenre,
      sortColumn
    } = this.state;

    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? movies.filter(movie => movie.genre._id === selectedGenre._id)
        : movies;

    /**
     * could use _.orderBy(filteredMovies, [sortColumn.path], [sortColumn.order])
     * to serve the same purpose which returns a sorted array
     */
    sortBy(filteredMovies, sortColumn.path, sortColumn.order);

    const tableTitle =
      filteredMovies.length === 0
        ? "There are no movies in the database"
        : `Showing ${filteredMovies.length} movies in the database`;

    const moviesPerPage = paginate(filteredMovies, currentPage, itemsPerPage);

    return (
      <div className="Movies row">
        <div className="col-md-4 p-5 mt-5">
          <Genres
            onSelectGenre={this.handleSelectGenre}
            selectedGenre={this.state.selectedGenre}
            genres={this.state.genres}
          />
        </div>
        <div className="col-md-8">
          <h5 className="text-center mb-5">{tableTitle}</h5>
          <MoviesTable
            moviesPerPage={moviesPerPage}
            onLike={this.handleLikedValue}
            onDelete={this.handleDeleteMovie}
            onSort={this.handleSort}
          />
          <Pagination
            totalMovies={filteredMovies.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
