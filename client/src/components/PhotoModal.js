import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

function PhotoModal({ isOpen, handleOpen, handleClose, photos }) {
  return (
    <>
      {/* <Button variant="primary" onClick={handleOpen}>
        View Photo Gallery
      </Button> */}

      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Photo Gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel>
            {photos.map((photo) => (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={`${process.env.REACT_APP_API}${photo.url}`}
                  alt="photo"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PhotoModal;
