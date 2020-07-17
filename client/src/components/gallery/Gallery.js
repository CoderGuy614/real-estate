import React, { useState } from "react";
import PhotoModal from "../PhotoModal";
import ImageMain from "./ImageMain";
import Previews from "./Previews";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Gallery = ({ photos }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Container fluid className="gallery-container">
      <Row>
        {photos && (
          <>
            <Col xs={12} md={6}>
              <ImageMain handleOpen={handleOpen} photos={photos} />
            </Col>
            <Col xs={12} md={6} className="d-none d-md-block">
              <Previews handleOpen={handleOpen} photos={photos} />
            </Col>

            <PhotoModal
              photos={photos}
              isOpen={isOpen}
              handleClose={handleClose}
              handleOpen={handleOpen}
            />
          </>
        )}
      </Row>
    </Container>
  );
};

export default Gallery;
