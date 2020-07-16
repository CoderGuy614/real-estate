import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import { connect } from "react-redux";
import { toggleShowFavorites } from "../actions/favorite";

const Filters = ({
  showFavorites,
  toggleShowFavorites,
  categories,
  maxPrice,
  typeSelect,
  bedroomSelect,
  filter,
}) => {
  const bedroomFilters = () => {
    return (
      <>
        <Form.Label>Bedrooms</Form.Label>
        <Form.Control as="select" onChange={bedroomSelect}>
          {[...Array(6)].map((choice, i) => {
            return (
              <option key={i} value={i + 1}>
                Min Bedrooms: {i + 1}{" "}
              </option>
            );
          })}
        </Form.Control>
      </>
    );
  };

  const categoryFilters = () => {
    return (
      <>
        <Form.Label>Type</Form.Label>
        <Form.Control as="select" onChange={typeSelect}>
          <option value="all">All Types</option>
          {categories.map((category, i) => {
            return (
              <option key={i} value={category}>
                {category}
              </option>
            );
          })}
        </Form.Control>
      </>
    );
  };

  const maxPriceFilters = () => {
    return (
      <>
        <Form.Label>Price</Form.Label>
        <Form.Control as="select" onChange={maxPrice}>
          <option value={1000000000}>Max. Price</option>
          <option value={1000000000}>$1,000,000+</option>
          <option value={750000}>$750,000</option>
          <option value={500000}>$500,000</option>
          <option value={450000}>$450,000</option>
          <option value={400000}>$400,000</option>
          <option value={350000}>$350,000</option>
          <option value={300000}>$300,000</option>
          <option value={250000}>$250,000</option>
          <option value={200000}>$200,000</option>
          <option value={150000}>$150,000</option>
          <option value={100000}>$100,000</option>
          <option value={75000}>$75,000</option>
          <option value={50000}>Less than $50,000</option>
        </Form.Control>
      </>
    );
  };

  const filterButton = () => (
    <Button className="filter-button" variant="primary" onClick={filter}>
      Filter
    </Button>
  );

  const favoriteButton = () => (
    <Button
      className="favorite-button"
      onClick={toggleShowFavorites}
      variant="primary"
    >
      {" "}
      SHOW FAVORITES
    </Button>
  );

  return (
    <Form className="filter-form">
      <Form.Row>
        <Col className="filter">{bedroomFilters()}</Col>
        <Col className="filter">{categoryFilters()}</Col>
        <Col className="filter">{maxPriceFilters()}</Col>
        <Col>{filterButton()}</Col>
        <Col>{favoriteButton()}</Col>
      </Form.Row>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  showFavorites: state.favoriteReducer.showFavorites,
  favorites: state.favoriteReducer.favorites,
});

export default connect(mapStateToProps, { toggleShowFavorites })(Filters);
