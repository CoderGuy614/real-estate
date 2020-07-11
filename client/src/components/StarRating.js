import React, { Component } from "react";

export default class StarRating extends Component {
  render() {
    return (
      <span className="rating">
        {[...Array(this.props.rating)].map((star, i) => {
          return <i className="fas fa-star" key={i}></i>;
        })}
        {[...Array(5 - this.props.rating)].map((star, i) => {
          return <i className="far fa-star" key={i}></i>;
        })}
      </span>
    );
  }
}
