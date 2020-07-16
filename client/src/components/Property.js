import React from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { getProperty, getAmenities } from "./apiCore";
import Gallery from "./Gallery";

import GoogleMap from "google-map-react";
import Pin from "./Pin";

// import { connect } from "react-redux";

import "../styles/cards.css";
import "../styles/grid.css";
import "../styles/users.css";
import "../styles/gallery.css";
// import { addFavorite, removeFavorite } from "../actions/favorite";
import Favorite from "./Favorite";

class Property extends React.Component {
  state = {
    property: {
      category: {},
      realtor: {},
    },
    map: {
      key: {
        key: `${process.env.REACT_APP_MAP_KEY}`,
      },
      center: {},
      zoom: 14,
    },
  };

  componentDidMount = () => {
    getProperty(this.props.match.params.id)
      .then((res) => {
        this.setState({
          property: res,
          map: {
            ...this.state.map,
            center: { lat: res.lat, lng: res.lng },
          },
        });
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  render() {
    const { property, map } = this.state;
    const { favorites } = this.props;
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
  }
}

// const mapStateToProps = (state) => ({
//   favorites: state.favorites,
// });

export default Property;
