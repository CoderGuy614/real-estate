import React from "react";

class Pin extends React.Component {
  state = {
    property: this.props.property,
    lat: this.props.lat,
    lng: this.props.lng,
    showPrice: this.props.showPrice,
  };
  componentWillMount() {
    this.setState({
      property: this.props.property,
      lat: this.props.lat,
      lng: this.props.lng,
      showPrice: this.props.showPrice,
    });
  }
  componentWillReceiveProps(props) {
    this.setState({
      property: this.props.property,
      lat: this.props.lat,
      lng: this.props.lng,
      showPrice: this.props.showPrice,
    });
  }

  formatPrice = (price) => {
    return (price / 1000).toString().concat("K");
  };

  render() {
    return (
      <div
        className={this.state.property.selected ? "pin selected" : "pin"}
        lat={this.state.lat}
        lng={this.state.lng}
      >
        {showPrice ? (
          <label>${this.formatPrice(this.state.property.Price)}</label>
        ) : null}
      </div>
    );
  }
}

export default Pin;
