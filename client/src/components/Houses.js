import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import GoogleMap from "google-map-react";
import Thumbnail from "./Thumbnail";
import Pin from "./Pin";
import Filters from "./Filters";

import "../styles/cards.css";
import "../styles/grid.css";
import "../styles/maps.css";
import "../styles/nav.css";

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

  filter = () => {
    const { filterValues, originalProperties } = this.state;
    let result = [];

    result = originalProperties.filter((h) => {
      return (
        h.Bedrooms >= filterValues.bedrooms && h.Price <= filterValues.maxPrice
      );
    });
    if (filterValues.category !== null && filterValues !== "all") {
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
    let bedroomChoice = e.target.value;
    let filterValues = {
      ...this.state.filterValues,
      bedrooms: Number(e.target.value),
    };
    console.log(filterValues);
    this.setState({ ...this.state, filterValues });
  };

  typeSelect = (e) => {
    let typeChoice = e.target.value;
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

  search = (e) => {
    let target = e.target.value.toLowerCase();
    let originalProperties = this.state.originalProperties;
    let properties = originalProperties.filter((h) => {
      return (
        h.Title.toLowerCase().includes(target) ||
        h.Address.toLowerCase().includes(target)
      );
    });
    this.setState({
      properties,
      originalProperties,
    });
  };

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API}/properties`)
      .then((res) => {
        this.setState({
          properties: res.data,
          originalProperties: res.data,
        });
      })
      .catch((err) => {
        console.log({ err });
      });
    axios
      .get(`${process.env.REACT_APP_API}/categories`)
      .then((res) => {
        let catArray = [];
        res.data.map((cat) => catArray.push(cat.name));
        this.setState({
          categories: catArray,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <>
        <Filters
          categories={this.state.categories}
          properties={this.state.properties}
          maxPrice={this.maxPrice}
          typeSelect={this.typeSelect}
          bedroomSelect={this.bedroomSelect}
          search={this.search}
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

export default Houses;
