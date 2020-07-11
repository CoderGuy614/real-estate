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
import Review from "./Review";

class Houses extends React.Component {
  state = {
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
  };

  search = (e) => {
    let target = e.target.value.toLowerCase();
    let originalProperties = this.state.originalProperties;
    let properties = originalProperties.filter((h) => {
      return (
        h.title.toLowerCase().includes(target) ||
        h.city.toLowerCase().includes(target) ||
        h.region.toLowerCase().includes(target)
      );
    });
    this.setState({
      properties,
      originalProperties,
    });
  };

  typeSelect = (e) => {
    let typeChoice = e.target.value;
    let originalProperties = this.state.originalProperties;
    if (typeChoice == "all") {
      this.setState({
        properties: originalProperties,
      });
    } else {
      let properties = originalProperties.filter((h) => {
        return h.category.name == typeChoice;
      });
      this.setState({
        properties,
        originalProperties,
      });
    }
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

  // bedroomSelect = (e) => {
  //   let bedroomChoice = e.target.value;
  //   let originalHouses = this.state.originalHouses;
  //   let houses = originalHouses.filter((h) => {
  //     return Number(h.bedrooms) >= Number(bedroomChoice);
  //   });
  //   this.setState({
  //     houses: houses,
  //     originalHouses: originalHouses,
  //   });
  // };

  // maxPrice = (e) => {
  //   let originalHouses = this.state.originalHouses;
  //   let maxPrice = e.target.value;
  //   if (maxPrice) {
  //     let houses = originalHouses.filter((h) => {
  //       return h.price <= maxPrice;
  //     });
  //     this.setState({
  //       houses: houses,
  //       originalHouses: originalHouses,
  //     });
  //   } else {
  //     this.setState({
  //       houses: originalHouses,
  //     });
  //   }
  // };
  // sortBy = (e) => {
  //   let sortBy = e.target.value;
  //   let originalHouses = this.state.originalHouses;
  //   if (sortBy == "price") {
  //     let houses = originalHouses.sort((a, b) => {
  //       return a.price - b.price;
  //     });
  //     this.setState({
  //       houses: houses,
  //       originalHouses: originalHouses,
  //     });
  //   } else {
  //     let houses = originalHouses.sort((a, b) => {
  //       return b.rating - a.rating;
  //     });
  //     this.setState({
  //       houses: houses,
  //       originalHouses: originalHouses,
  //     });
  //   }
  // };
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
    // axios
    //   .get(`${process.env.REACT_APP_API}/types`)
    //   .then((res) => {
    //     let typesArray = [];
    //     res.data.map((type) => typesArray.push(type.name));
    //     this.setState({
    //       types: typesArray,
    //     });
    //   })
    //   .catch((err) => console.log(err));
  }
  render() {
    return (
      <>
        <Nav />

        {/* Filters Section */}
        <div className="filters">
          <select onChange={() => console.log("bedroom select")}>
            {[...Array(6)].map((choice, i) => {
              return (
                <option key={i} value={i + 1}>
                  Min Bedrooms: {i + 1}{" "}
                </option>
              );
            })}
          </select>
          <select onChange={() => console.log("Type Select")}>
            <option value="all">All Types</option>
            {this.state.categories.map((category, i) => {
              return (
                <option key={i} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
          <input
            onChange={this.maxPrice}
            type="number"
            placeholder="max price"
          />
          <select onChange={() => console.log("SORT BY")}>
            <option value="price">Sort By</option>
            <option value="price">Lowest Price</option>
            <option value="rating">Highest Rating</option>
          </select>
          <input
            onChange={() => console.log("SEARCH BY")}
            type="text"
            className="search"
            placeholder="Search..."
          />
        </div>
        {/* Map Section */}
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
