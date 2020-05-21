import React from "react";
import CustomFilePicker from "./customfile";
const SearchForm = (props) => {
  const { dirLable, onFileSelect, searchPattern, onChange, onSubmit, error } = props;

  const classes = (error && error.name !== 'selectDirError')? "is-invalid":"is-valid";
  return (
    <div className="col-md-11 mx-auto">
      <div className="form-group mb-2">
        <CustomFilePicker label={dirLable} onFileSelect={onFileSelect} classes={classes}  />
        {error && error.name === 'selectDirError' && <div className="text-muted">{error.message}</div>}
      </div>
      <div className="form-group">
        <label htmlFor="searchPattern">Search Pattern</label>
        <input
          type="text"
          className="form-control"
          id="searchPattern"
          name="searchPattern"
          placeholder="Enter any search pattern"
          value={searchPattern}
          onChange={onChange}
        />
      </div>
      <button 
        className="btn btn-outline-secondary btn-block btn-lg"
        onClick={onSubmit}
        id="searchBtn"
        name="searchBtn"
        disabled={error && error.name === 'searchBtn' && true }
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;
