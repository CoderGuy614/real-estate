import React, { Component } from "react";

export default class Gallery extends Component {
  state = {
    selectedImage: this.props.images
  };
  componentWillReceiveProps(props) {
    this.setState({
      selectedImage: props.images[0]
    });
  }
  render() {
    return (
      <>
        <div className="gallery">
          <div
            className="image-main"
            style={{ backgroundImage: `url('${this.state.selectedImage}')` }}
          ></div>
          <div className="previews">
            {this.props.images.map((image, i) => (
              <div
                className="preview"
                key={i}
                style={{ backgroundImage: `url('${image}')` }}
              ></div>
            ))}
          </div>
        </div>
      </>
    );
  }
}
