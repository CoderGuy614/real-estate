import React from "react";

const Previews = ({ photos, handleOpen }) => {
  return (
    <div className="previews">
      {photos &&
        photos.map((image, i) => (
          <div
            className="preview"
            onClick={() => handleOpen()}
            key={i}
            style={{
              backgroundImage: `url('${process.env.REACT_APP_API}${image.url}')`,
            }}
          ></div>
        ))}
    </div>
  );
};

export default Previews;
