import React from "react";

function MovieForm({ match, history }) {
  return (
    <div>
      <h2>Movie Form {match.params.id}</h2>
      <br />
      <button className="btn btn-primary" onClick={() => history.goBack()}>
        Save
      </button>
    </div>
  );
}

export default MovieForm;
