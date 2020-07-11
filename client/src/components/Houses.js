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
    houses: [],
    types: [],
    map: {
      key: {
        key: `${process.env.REACT_APP_MAP_KEY}`,
      },
      center: {
        lat: -8.652,
        lng: 115.137,
      },
      zoom: 14,
    },
  };

  search = (e) => {
    let target = e.target.value.toLowerCase();
    let originalHouses = this.state.originalHouses;
    let houses = originalHouses.filter((h) => {
      return (
        h.title.toLowerCase().includes(target) ||
        h.city.toLowerCase().includes(target) ||
        h.region.toLowerCase().includes(target)
      );
    });
    this.setState({
      houses: houses,
      originalHouses: originalHouses,
    });
  };

  typeSelect = (e) => {
    let typeChoice = e.target.value;
    let originalHouses = this.state.originalHouses;
    if (typeChoice == "all") {
      this.setState({
        houses: originalHouses,
      });
    } else {
      let houses = originalHouses.filter((h) => {
        return h.type.name == typeChoice;
      });
      this.setState({
        houses: houses,
        originalHouses: originalHouses,
      });
    }
  };

  houseHover = (id) => {
    let houses = this.state.houses;
    houses.map((h) => {
      h.selected = false;
      return h;
    });
    let house = houses.find((h) => h._id == id);
    house.selected = true;
    this.setState({ houses });
  };

  bedroomSelect = (e) => {
    let bedroomChoice = e.target.value;
    let originalHouses = this.state.originalHouses;
    let houses = originalHouses.filter((h) => {
      return Number(h.bedrooms) >= Number(bedroomChoice);
    });
    this.setState({
      houses: houses,
      originalHouses: originalHouses,
    });
  };

  maxPrice = (e) => {
    let originalHouses = this.state.originalHouses;
    let maxPrice = e.target.value;
    if (maxPrice) {
      let houses = originalHouses.filter((h) => {
        return h.price <= maxPrice;
      });
      this.setState({
        houses: houses,
        originalHouses: originalHouses,
      });
    } else {
      this.setState({
        houses: originalHouses,
      });
    }
  };
  sortBy = (e) => {
    let sortBy = e.target.value;
    let originalHouses = this.state.originalHouses;
    if (sortBy == "price") {
      let houses = originalHouses.sort((a, b) => {
        return a.price - b.price;
      });
      this.setState({
        houses: houses,
        originalHouses: originalHouses,
      });
    } else {
      let houses = originalHouses.sort((a, b) => {
        return b.rating - a.rating;
      });
      this.setState({
        houses: houses,
        originalHouses: originalHouses,
      });
    }
  };
  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_API}/houses`)
      .then((res) => {
        this.setState({
          houses: res.data,
          originalHouses: res.data,
        });
      })
      .catch((err) => {
        console.log({ err });
      });
    axios
      .get(`${process.env.REACT_APP_API}/types`)
      .then((res) => {
        let typesArray = [];
        res.data.map((type) => typesArray.push(type.name));
        this.setState({
          types: typesArray,
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <>
        <Nav />
        <div className="filters">
          <select onChange={this.bedroomSelect}>
            {[...Array(6)].map((choice, i) => {
              return (
                <option key={i} value={i + 1}>
                  Min Bedrooms: {i + 1}{" "}
                </option>
              );
            })}
          </select>
          <select onChange={this.typeSelect}>
            <option value="all">All Types</option>
            {this.state.types.map((type, i) => {
              return (
                <option key={i} value={type}>
                  {type}
                </option>
              );
            })}
          </select>
          <input
            onChange={this.maxPrice}
            type="number"
            placeholder="max price"
          />
          <select onChange={this.sortBy}>
            <option value="price">Sort By</option>
            <option value="price">Lowest Price</option>
            <option value="rating">Highest Rating</option>
          </select>
          <input
            onChange={this.search}
            type="text"
            className="search"
            placeholder="Search..."
          />
        </div>
        <div className="grid map">
          <div className="grid four large">
            {this.state.houses.map((house, index) => (
              <Link key={index} to={`/houses/${house._id}`}>
                <Thumbnail
                  house={house}
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
              {this.state.houses.map((h, i) => (
                <Pin house={h} lat={h.lat} lng={h.lng} key={i} />
              ))}
            </GoogleMap>
          </div>
        </div>
      </>
    );
  }
}

export default Houses;
