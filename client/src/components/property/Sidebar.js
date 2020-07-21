import React from "react";
import GoogleMap from "google-map-react";
import { Link } from "react-router-dom";
import Pin from "../Pin";

const Sidebar = ({ property, map }) => {
  return (
    <>
      <div className="card shadow">
        <span className="asking-price">Asking Price:</span>
        <div className="content large">
          <h3>
            <em>${Number(property.Price).toLocaleString()}</em>
          </h3>
          <Link to="#">Calculate Payment</Link>
        </div>
        <i className="fa fa-heart-o" aria-hidden="true"></i>
      </div>
      <div className="detail-map">
        <GoogleMap
          bootstrapURLKeys={map.key}
          center={map.center}
          zoom={map.zoom}
        >
          <Pin
            property={property}
            lat={property.lat}
            lng={property.lng}
            key={property.id}
          />
        </GoogleMap>
      </div>
    </>
  );
};

export default Sidebar;
