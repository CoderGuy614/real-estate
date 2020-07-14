import React, { useState, useEffect } from "react";
import PhotoModal from "./PhotoModal";

const Gallery = ({ photos }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="gallery">
      {photos ? (
        <>
          <div
            className="image-main"
            style={{
              backgroundImage: `url('${process.env.REACT_APP_API}${photos[0].url}')`,
            }}
          ></div>
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
            <PhotoModal
              photos={photos}
              isOpen={isOpen}
              handleClose={handleClose}
              handleOpen={handleOpen}
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Gallery;
