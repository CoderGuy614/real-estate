import React from "react";
import StarRating from "./StarRating";

class Thumbnail extends React.Component {
  state = {
    property: this.props.property,
  };
  componentWillReceiveProps(props) {
    this.setState({ property: props.property });
  }

  render() {
    const photoUrl = this.state.property.Photos[0].url;

    return (
      <a
        className="card link"
        onMouseEnter={(e) => this.props.houseHover(this.state.property.id)}
      >
        <div
          className="image"
          style={{
            backgroundImage: `url('${process.env.REACT_APP_API}${photoUrl}')`,
          }}
        ></div>
        <div className="content">
          <small className="meta">
            {this.state.property.category.name} • {this.state.property.Bedrooms}{" "}
            Bedrooms • {this.state.property.Bathrooms} Bathrooms
          </small>
          <h2>{this.state.property.Title}</h2>
          <small className="location">
            <i className="fas fa-map-marker-alt"></i>
            <span>{this.state.property.Address}</span>
          </small>
          <span className="price">${this.state.property.Price}</span>
        </div>
      </a>
    );
  }
}

export default Thumbnail;
