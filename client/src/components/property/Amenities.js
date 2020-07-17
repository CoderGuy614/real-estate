import React from "react";
import { getAmenities } from "../apiCore";

const Amenities = ({ property }) => {
  return (
    <div className="card specs">
      <div className="content">
        <ul className="grid two">
          <h5>Amenities</h5>
          {getAmenities(property).map((a, i) => {
            return <li key={i}>{a}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Amenities;
