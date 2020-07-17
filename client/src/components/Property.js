import React, { useState, useEffect } from "react";
import { getProperty } from "./apiCore";
import Gallery from "./Gallery";
import Favorite from "./Favorite";

import Realtor from "./Realtor";
import Specs from "./property/Specs";
import Description from "./property/Description";
import Amenities from "./property/Amenities";
import Intro from "./property/Intro";
import Sidebar from "./property/Sidebar";
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
        <div className="grid sidebar">
          <div className="content">
            <Intro title={property.Title} address={property.Address} />
            <Favorite id={property.id} />
            <Realtor realtor={property.realtor} />
            <Description description={property.Description} />
            <Specs property={property} />
            <Amenities property={property} />
            <div className="grid sidebar-right">
              <Sidebar property={property} map={map} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
