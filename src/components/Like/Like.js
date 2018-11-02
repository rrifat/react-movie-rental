import React from "react";

function Like(props) {
  return (
    <i
      className={props.liked ? "fa fa-heart" : "fa fa-heart-o"}
      aria-hidden="true"
      onClick={props.onChange}
      style={{ cursor: "pointer" }}
    />
  );
}

export default Like;
