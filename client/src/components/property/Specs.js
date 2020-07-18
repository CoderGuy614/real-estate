import React from "react";

const Specs = ({ property }) => {
  return (
    <div className="card specs">
      <div className="content">
        <h5>Details</h5>
        <ul className="grid two">
          <li>
            <i className="fas fa-fw fa-home"></i>
            {property.category.name}
          </li>

          <li>
            <i className="fas fa-fw fa-bed"></i>
            {property.Bedrooms} bedrooms
          </li>
          <li>
            <i className="fas fa-fw fa-bath"></i>
            {property.Bathrooms} bathrooms
          </li>
          <li>
            <i class="fas fa-ruler"></i>
            {property.SquareFeet} Sq.Ft.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Specs;
