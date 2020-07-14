import React, { useState, useEffect } from "react";

const Pin2 = ({ property, lat, lng, showPrice }) => {
  const [values, setValues] = useState({
    property,
    lat,
    lng,
    showPrice,
  });

  const formatPrice = (price) => {
    return (price / 1000).toString().concat("K");
  };
  return (
    <div
      className={property.selected ? "pin selected" : "pin"}
      lat={lat}
      lng={lng}
    >
      {showPrice ? <label>${formatPrice(property.Price)}</label> : null}
    </div>
  );
};

export default Pin2;
