import React from "react";

const ImageMain = ({ photos, handleOpen }) => {
  return (
    <div
      onClick={handleOpen}
      className="image-main"
      style={{
        backgroundImage: `url('${process.env.REACT_APP_API}${photos[0].url}')`,
      }}
    ></div>
  );
};

export default ImageMain;
