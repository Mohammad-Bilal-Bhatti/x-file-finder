import React from "react";
const DisplayCard = (props) => {
  const { color, title, subtitle } = props;
  return (
    <div className={`card mx-2 my-2 bg-${color}`} style={{ width: "18rem" }}>
      <div className="card-body">
        <div className="text-center">
          <div className="display-1 text-monospace font-weight-bold text-light">
            {title}
          </div>
          <small className="text-white-50">{subtitle}</small>
        </div>
      </div>
    </div>
  );
};

export default DisplayCard;
