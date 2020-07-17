import React, { useState } from "react";
import PhotoModal from "../PhotoModal";
import ImageMain from "./ImageMain";
import Previews from "./Previews";

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
            onClick={handleOpen}
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
          </div>
          <PhotoModal
            photos={photos}
            isOpen={isOpen}
            handleClose={handleClose}
            handleOpen={handleOpen}
          />
        </>
      ) : null}
    </div>
  );
};

export default Gallery;
