import React from "react";

const Amenities = ({ amenities }) => {
  return (
    <div className="card specs">
      <div className="content">
        <h5>Amenities</h5>

        <ul className="grid two">
          {amenities
            ? amenities.amenities.map((a, i) => (
                <li key={i}>
                  <i class="fas fa-circle"></i>
                  {a}
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};

export default Amenities;
