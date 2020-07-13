import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import GoogleMap from "google-map-react";
import "../styles/cards.css";
import "../styles/grid.css";
import "../styles/maps.css";
import "../styles/nav.css";
import Thumbnail from "./Thumbnail";
import Pin from "./Pin";
import Nav from "./Nav";
import Filters from "./Filters";
import Review from "./Review";

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
        lat: 33.77596,
        lng: -84.48497,
      },
      zoom: 14,
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
      console.log(h.maxPrice, filterValues.maxPrice);
      return (
        h.Bedrooms >= filterValues.bedrooms && h.Price <= filterValues.maxPrice
      );
    });

    // if (filterValues.bedrooms) {
    //   console.log("BEDROOM CHANGE");
    //   result = result.filter((h) => {
    //     return h.Bedrooms >= filterValues.bedrooms;
    //   });
    // }

    // if (filterValues.category) {
    //   result = result.filter((h) => {
    //     return h.category.name == filterValues.category;
    //   });
    // }

    // if (filterValues.maxPrice) {
    //   result = result.filter((h) => {
    //     return h.Price <= filterValues.maxPrice;
    //   });
    // }
    console.log(result);
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

    // console.log(bedroomChoice);
    // let originalProperties = this.state.originalProperties;
    // let properties = originalProperties.filter((h) => {
    //   return h.Bedrooms >= bedroomChoice;
    // });
    // if (bedroomChoice) {
    //   this.setState({
    //     properties,
    //   });
    // } else {
    //   this.setState({
    //     properties: originalProperties,
    //   });
    // }
  };

  typeSelect = (e) => {
    let typeChoice = e.target.value;
    let filterValues = { ...this.state.filterValues, category: e.target.value };
    this.setState({ ...this.state, filterValues });

    // let originalProperties = this.state.originalProperties;
    // if (typeChoice == "all") {
    //   this.setState({
    //     properties: originalProperties,
    //   });
    // } else {
    //   let properties = originalProperties.filter((h) => {
    //     return h.category.name == typeChoice;
    //   });
    //   this.setState({
    //     properties,
    //   });
    // }
  };

  maxPrice = (e) => {
    let filterValues = {
      ...this.state.filterValues,
      maxPrice: Number(e.target.value),
    };
    this.setState({ ...this.state, filterValues });

    // let originalProperties = this.state.originalProperties;
    // console.log(maxPrice);
    // if (maxPrice) {
    //   let properties = originalProperties.filter((h) => {
    //     return Number(h.Price) <= maxPrice;
    //   });
    //   this.setState({
    //     properties,
    //   });
    // } else {
    //   this.setState({
    //     properties: originalProperties,
    //   });
    // }
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
        <Nav />

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
                <Pin property={h} lat={h.lat} lng={h.lng} key={i} />
              ))}
            </GoogleMap>
          </div>
        </div>
      </>
    );
  }
}

export default Houses;
