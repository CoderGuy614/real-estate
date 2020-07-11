import React from "react";
import axios from "axios";
// Components
import Nav from "./Nav";
import Gallery from "./Gallery";
import StarRating from "./StarRating";
import Review from "./Review";

// CSS
import "../styles/cards.css";
import "../styles/grid.css";
import "../styles/users.css";
import "../styles/nav.css";
import "../styles/gallery.css";
import "../styles/review.css";

class Property extends React.Component {
  state = {
    property: {
      category: {},
    },
  };
  componentDidMount() {
    axios
      .get(
        `${process.env.REACT_APP_API}/properties/${this.props.match.params.id}`
      )
      .then((res) => {
        this.setState({
          property: res.data,
        });
      })
      .catch((err) => {
        console.log({ err });
      });
  }
  render() {
    return (
      <>
        <Nav />
        <Gallery photos={this.state.property.Photos} />
        <div className="grid medium">
          <div className="grid sidebar-right">
            <div className="content">
              <h1>{this.state.property.title}</h1>
              <small>
                <i className="fas fa-map-marker-alt"></i>
                <span>{this.state.property.Address}</span>
              </small>
              <div className="user">
                <div
                  className="avatar"
                  style={{
                    backgroundImage: `url('https://i0.wp.com/ahfirstaid.org/wp-content/uploads/2014/07/avatar-placeholder.png')`,
                  }}
                ></div>
                <div className="name">
                  <small>Listed by: Realtor Name</small>
                  {/* <span>{this.state.property.host.name}</span> */}
                </div>
              </div>
              <div className="card specs">
                <div className="content">
                  <ul className="grid two">
                    <li>
                      <i className="fas fa-fw fa-home"></i>
                      {this.state.property.category.name}
                    </li>
                    {/* <li>
                      <i className="fas fa-fw fa-user-friends"></i>
                      {this.state.property.guests} guests
                    </li> */}
                    <li>
                      <i className="fas fa-fw fa-bed"></i>
                      {this.state.property.Bedrooms} bedrooms
                    </li>
                    <li>
                      <i className="fas fa-fw fa-bath"></i>
                      {this.state.property.Bathrooms} bathrooms
                    </li>
                  </ul>
                </div>
              </div>
              <p>{this.state.property.description}</p>
              <h3>Amenities</h3>
              <div className="card specs">
                <div className="content">
                  <ul className="grid two">
                    {/* {this.state.house.amenities.map((a, i) => {
                      return (
                        <li key={i}>
                          <i className={`fas fa-fw fa-${a.icon}`}></i>
                          {a.name}
                        </li>
                      );
                    })} */}
                    <li>Fireplace</li>
                    <li>Patio</li>
                    <li>Fenced Yard</li>
                    <li>Appliances Included</li>
                  </ul>
                </div>
              </div>
              {/* <Review reviews={this.state.reviews} /> */}
            </div>
            <div className="sidebar">
              <div className="card shadow">
                <div className="content large">
                  <h3>${this.state.property.Price}</h3>
                  {/* <small>
                    <StarRating rating={this.state.house.rating} />
                    <span>{this.state.reviews.length} Reviews</span>
                  </small> */}
                  {/* <form className="small">
                    <div className="group">
                      <label>Guests</label>
                      <select>
                        {[...Array(this.state.house.guests)].map((g, i) => {
                          return (
                            <option key={i} value="">
                              {i + 1} guests
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="group">
                      <button className="secondary full" type="submit">
                        Book this house
                      </button>
                    </div>
                  </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Property;
