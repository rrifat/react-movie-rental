import React, { Component } from "react";
import { getMovies } from "../../services/fake-movie-service";
import Like from "../Like/Like";
import Pagination from "../Pagination/Pagination";
import paginate from "../utils/paginate";

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies(),
      currentPage: 1,
      itemsPerPage: 4
    };

    this.handleOnClick = this.handleLikedValue.bind(this);
    this.handleLikedValue = this.handleLikedValue.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handleOnClick(id) {
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

  render() {
    const { movies, currentPage, itemsPerPage } = this.state;
    const totalMovies = movies.length;
    const tableTitle =
      totalMovies === 0
        ? "There are no movies in the database"
        : `Showing ${totalMovies} movies in the database`;
    const moviesPerPage = paginate(movies, currentPage, itemsPerPage);

    return (
      <div className="Movies">
        <h5 className="text-center mb-5">{tableTitle}</h5>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">Like</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {moviesPerPage.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onChange={() => this.handleLikedValue(movie)}
                  />
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleOnClick(movie._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          totalMovies={totalMovies}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Movies;
