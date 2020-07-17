import React, { useState } from "react";
import PhotoModal from "../PhotoModal";
import ImageMain from "./ImageMain";
import Previews from "./Previews";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Gallery2 = ({ photos }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container fluid className="gallery">
      {photos && (
        <>
          <ImageMain handleOpen={handleOpen} photos={photos} />
          <Previews handleOpen={handleOpen} photos={photos} />
          <PhotoModal
            photos={photos}
            isOpen={isOpen}
            handleClose={handleClose}
            handleOpen={handleOpen}
          />
        </>
      )}
    </Container>
  );
};

export default Gallery2;
