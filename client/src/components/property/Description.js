import React from "react";

const Description = ({ description }) => {
  return (
    <div className="card specs">
      <div className="content">
        <h5>Description</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Description;
