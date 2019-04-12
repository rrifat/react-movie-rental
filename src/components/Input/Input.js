import React from "react";
function Input({ name, value, onChange, error }) {
  return (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor={name}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </label>
        <input
          value={value}
          name={name}
          type={name}
          className="form-control"
          id={name}
          onChange={onChange}
        />
      </div>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
    </React.Fragment>
  );
}

export default Input;
