import React from "react";

const Intro = ({ title, address }) => {
  return (
    <>
      <h4>{title}</h4>
      <i className="fas fa-map-marker-alt"></i>
      <span className="address">{address}</span>
    </>
  );
};

export default Intro;
