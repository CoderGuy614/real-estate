import React, { useState, useEffect } from "react";
import GoogleMap from "google-map-react";
import Thumbnail from "./Thumbnail";
import Pin from "./Pin";
import Filters from "./Filters";
import { getProperties, getCategories } from "./apiCore";

import { connect } from "react-redux";

import "../styles/cards.css";
import "../styles/grid.css";
import "../styles/maps.css";

const Houses = ({
  favorites: { favorites },
  showFavorites: { showFavorites },
}) => {
  const [properties, setProperties] = useState([]);
  const [originalProperties, setOriginalProperties] = useState([]);
  const [categories, setCategories] = useState([]);
  const [map, setMap] = useState({
    key: { key: `${process.env.REACT_APP_MAP_KEY}` },
    center: { lat: 33.749, lng: -84.388 },
    zoom: 10,
  });
  const [filterValues, setFilterValues] = useState({
    bedrooms: 0,
    category: null,
    maxPrice: 1000000000,
  });

  useEffect(() => {
    getCategories().then((cat) => {
      setCategories(cat);
    });
    getProperties().then((prop) => {
      setProperties(prop);
      setOriginalProperties(prop);
    });
  }, []);

  useEffect(() => {
    showFavorites
      ? setProperties(
          originalProperties.filter((prop) => favorites.includes(prop.id))
        )
      : setProperties(originalProperties);
  }, [showFavorites, favorites]);

  const houseHover = (id) => {
    let houses = properties.map((h) => {
      h.selected = false;
      return h;
    });

    let house = houses.find((h) => h.id == id);
    house.selected = true;
    setProperties(houses);
  };

  const filter = () => {
    let result = originalProperties.filter((h) => {
      return (
        h.Bedrooms >= filterValues.bedrooms && h.Price <= filterValues.maxPrice
      );
    });
    if (filterValues.category !== null && filterValues.category !== "all") {
      result = result.filter((h) => {
        return h.category.name == filterValues.category;
      });
    }
    setProperties(result);
  };
  const bedroomSelect = (e) => {
    setFilterValues({ ...filterValues, bedrooms: Number(e.target.value) });
  };

  const typeSelect = (e) => {
    setFilterValues({ ...filterValues, category: e.target.value });
  };
  const maxPrice = (e) => {
    setFilterValues({ ...filterValues, maxPrice: e.target.value });
  };

  return (
    <>
      <Filters
        categories={categories}
        properties={properties}
        maxPrice={maxPrice}
        typeSelect={typeSelect}
        bedroomSelect={bedroomSelect}
        filter={filter}
      />

      <div className="grid map">
        <div className="grid four large">
          {properties.map((property, index) => (
            <Thumbnail
              property={property}
              key={index}
              houseHover={houseHover}
            />
          ))}
        </div>
        <div className="map">
          <GoogleMap
            bootstrapURLKeys={map.key}
            center={map.center}
            zoom={map.zoom}
          >
            {properties.map((h, i) => (
              <Pin
                property={h}
                lat={h.lat}
                lng={h.lng}
                key={i}
                showPrice={true}
              />
            ))}
          </GoogleMap>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  favorites: state.favoriteReducer,
  showFavorites: state.favoriteReducer,
});

export default connect(mapStateToProps)(Houses);
