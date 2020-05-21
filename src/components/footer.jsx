import React from "react";
const Footer = (props) => {
  return (
    <footer
      className="text-center custom-dark d-flex justify-content-center align-items-center"
      style={{ height: "4rem" }}
    >
      <div className="lead">
        Made with <i className="fa fa-heart text-danger"></i> Using{" "}
        <strong className="text-purple font-weight-bold">bootstrap</strong> .{" "}
        <strong className="text-info font-weight-bold">font-awesome</strong> .{" "}
        <strong className="text-success font-weight-bold">electron.js</strong>
      </div>
    </footer>
  );
};

export default Footer;
