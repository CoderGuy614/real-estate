import React, { useState, useEffect } from "react";
import { getProperty, getAmenities } from "./apiCore";
import Gallery from "./Gallery";

import GoogleMap from "google-map-react";
import Favorite from "./Favorite";
import Pin from "./Pin";

// import { connect } from "react-redux";

import "../styles/cards.css";
import "../styles/grid.css";
import "../styles/users.css";
import "../styles/gallery.css";

const Property = (props) => {
  const [property, setProperty] = useState({ category: {}, realtor: {} });
  const [map, setMap] = useState({
    key: {
      key: `${process.env.REACT_APP_MAP_KEY}`,
    },
    center: { lat: null, lng: null },
    zoom: 14,
  });

  useEffect(() => {
    getProperty(props.match.params.id).then((prop) => {
      setProperty(prop);
      setMap({ ...map, center: { lat: prop.lat, lng: prop.lng } });
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Gallery photos={property.Photos} />
      <div className="grid medium">
        <div className="grid sidebar-right">
          <div className="content">
            <h1>{property.title}</h1>
            <small>
              <i className="fas fa-map-marker-alt"></i>
              <span>{property.Address}</span>
            </small>
            <Favorite id={property.id} />
            <div className="user">
              <div
                className="avatar"
                style={{
                  backgroundImage: `url('https://i0.wp.com/ahfirstaid.org/wp-content/uploads/2014/07/avatar-placeholder.png')`,
                }}
              ></div>
              <div className="name">
                <small>Listed by: {property.realtor.Name}</small>
              </div>
            </div>
            <div className="card specs">
              <div className="content">
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
                </ul>
              </div>
            </div>
            <p>{property.description}</p>
            <h3>Amenities</h3>
            <div className="card specs">
              <div className="content">
                <ul className="grid two">
                  {getAmenities(property).map((a, i) => {
                    return <li key={i}>{a}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <div className="card shadow">
              <span className="asking-price">Asking Price:</span>
              <div className="content large">
                <h3>${Number(property.Price).toLocaleString()}</h3>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
