import React from "react";

function Genres(props) {
  const { textProp, valueProp } = props;

  return (
    <ul className="list-group">
      {props.genres.map(genre => (
        <li
          className={
            "list-group-item " + (props.selectedGenre === genre ? "active" : "")
          }
          key={genre[valueProp]}
          style={{ cursor: "pointer" }}
          onClick={() => props.onSelectGenre(genre)}
        >
          {genre[textProp]}
        </li>
      ))}
    </ul>
  );
}

Genres.defaultProps = {
  textProp: "name",
  valueProp: "_id"
};

export default Genres;
