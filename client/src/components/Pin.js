import React from "react";

class Pin extends React.Component {
  state = {
    property: this.props.property,
    lat: this.props.lat,
    lng: this.props.lng,
  };
  componentWillMount() {
    this.setState({
      house: this.props.house,
      lat: this.props.lat,
      lng: this.props.lng,
    });
  }
  componentWillReceiveProps(props) {
    this.setState({
      property: this.props.property,
      lat: this.props.lat,
      lng: this.props.lng,
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
        <label>${this.formatPrice(this.state.property.Price)}</label>
      </div>
    );
  }
}

export default Pin;
