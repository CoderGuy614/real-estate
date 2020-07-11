import React, { Component } from "react";

export default class Gallery extends Component {
  state = {
    selectedImage: this.props.photos,
  };
  componentWillReceiveProps(props) {
    this.setState({
      photos: props.photos,
      selectedImage: props.photos[0].url,
    });
  }

  render() {
    return (
      <>
        <div className="gallery">
          <div
            className="image-main"
            style={{
              backgroundImage: `url('${process.env.REACT_APP_API}${this.state.selectedImage}')`,
            }}
          ></div>
          <div className="previews">
            {this.state.photos &&
              this.state.photos.map((image, i) => (
                <div
                  className="preview"
                  key={i}
                  style={{
                    backgroundImage: `url('${process.env.REACT_APP_API}${image.url}')`,
                  }}
                ></div>
              ))}
          </div>
        </div>
      </>
    );
  }
}
