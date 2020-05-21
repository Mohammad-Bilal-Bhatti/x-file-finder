import React from "react";
const Header = (props) => {
  return (
    <header>
      <div className="jumbotron custom-dark">
        <div className="text-center">
          <h1 className="display-4">
            <strong className="font-weight-bold">Welcome</strong> to{" "}
            <strong className="text-secondary">File</strong>{" "}
            <strong className="text-danger">Engine.</strong>
          </h1>
          <small className="lead">Get control to all of your files...</small>
        </div>
      </div>
    </header>
  );
};

export default Header;
