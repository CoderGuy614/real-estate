import React from "react";
import { Link } from "react-router-dom";
import GoogleMap from "google-map-react";
import Thumbnail from "./Thumbnail";
import Pin from "./Pin";
import Filters from "./Filters";
import { getProperties, getCategories } from "./apiCore";
import { addFavorite } from "../actions/favorite";

import { connect } from "react-redux";
import "../styles/cards.css";
import "../styles/grid.css";
import "../styles/maps.css";

class Houses extends React.Component {
  state = {
    originalProperties: [],
    properties: [],
    categories: [],
    map: {
      key: {
        key: `${process.env.REACT_APP_MAP_KEY}`,
      },
      center: {
        lat: 33.749,
        lng: -84.388,
      },
      zoom: 10,
    },
    filterValues: {
      bedrooms: 0,
      category: null,
      maxPrice: 1000000000000000,
    },
  };

  componentDidMount = () => {
    getCategories().then((categories) => {
      this.setState({
        categories,
      });
    });

    getProperties().then((properties) => {
      this.setState({
        properties,
        originalProperties: properties,
      });
    });
  };

  filter = () => {
    const { filterValues, originalProperties } = this.state;
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
    this.setState({ properties: result });
  };

  houseHover = (id) => {
    let properties = this.state.properties;
    properties.map((h) => {
      h.selected = false;
      return h;
    });
    let property = properties.find((h) => h.id == id);
    property.selected = true;
    this.setState({ properties });
  };

  bedroomSelect = (e) => {
    let filterValues = {
      ...this.state.filterValues,
      bedrooms: Number(e.target.value),
    };
    this.setState({ ...this.state, filterValues });
  };
  typeSelect = (e) => {
    let filterValues = { ...this.state.filterValues, category: e.target.value };
    this.setState({ ...this.state, filterValues });
  };
  maxPrice = (e) => {
    let filterValues = {
      ...this.state.filterValues,
      maxPrice: Number(e.target.value),
    };
    this.setState({ ...this.state, filterValues });
  };

  render() {
    return (
      <>
        <Filters
          categories={this.state.categories}
          properties={this.state.properties}
          maxPrice={this.maxPrice}
          typeSelect={this.typeSelect}
          bedroomSelect={this.bedroomSelect}
          filter={this.filter}
        />

        <div className="grid map">
          <div className="grid four large">
            {this.state.properties.map((property, index) => (
              <Link key={index} to={`/property/${property.id}`}>
                <Thumbnail
                  property={property}
                  key={index}
                  houseHover={this.houseHover}
                />
              </Link>
            ))}
          </div>
          <div className="map">
            <GoogleMap
              bootstrapURLKeys={this.state.map.key}
              center={this.state.map.center}
              zoom={this.state.map.zoom}
            >
              {this.state.properties.map((h, i) => (
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
  }
}

const mapStateToProps = (state) => ({
  favorites: state.favorites,
});

export default connect(mapStateToProps)(Houses);
