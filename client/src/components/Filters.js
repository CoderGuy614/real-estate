import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { connect } from "react-redux";
import { toggleShowFavorites } from "../actions/favorite";
import { HeartFill } from "react-bootstrap-icons";

const Filters = ({
  favorites: { favorites },
  showFavorites: { showFavorites },
  toggleShowFavorites,
  toggleShowFilters,
  categories,
  maxPrice,
  typeSelect,
  bedroomSelect,
  filter,
}) => {
  const bedroomFilters = () => {
    return (
      <Form.Group>
        <Form.Label className="d-none d-md-block">
          <i className="fas fa-bed fa-2x filter-icon"></i>
        </Form.Label>

        <Form.Control
          disabled={showFavorites}
          as="select"
          onChange={bedroomSelect}
        >
          {[...Array(6)].map((choice, i) => {
            return (
              <option key={i} value={i}>
                Min Bedrooms: {i}{" "}
              </option>
            );
          })}
        </Form.Control>
      </Form.Group>
    );
  };

  const categoryFilters = () => {
    return (
      <Form.Group>
        <Form.Label className="d-none d-md-block">
          <i className="fas fa-home fa-2x filter-icon"></i>
        </Form.Label>

        <Form.Control
          disabled={showFavorites}
          as="select"
          onChange={typeSelect}
          className="d-flex"
        >
          <option value="all">All Types</option>
          {categories.map((category, i) => {
            return (
              <option key={i} value={category}>
                {category}
              </option>
            );
          })}
        </Form.Control>
      </Form.Group>
    );
  };

  const maxPriceFilters = () => {
    return (
      <Form.Group>
        <Form.Label className="d-none d-md-block">
          <i className="fas fa-dollar-sign fa-2x filter-icon"></i>
        </Form.Label>
        <Form.Control disabled={showFavorites} as="select" onChange={maxPrice}>
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
      </Form.Group>
    );
  };

  const filterButton = () => (
    <Button
      disabled={showFavorites}
      className="filter-button"
      variant="primary"
      onClick={filter}
    >
      Filter
    </Button>
  );

  const favoriteButton = () => (
    <>
      <Button className="favorite-button" onClick={toggleShowFavorites}>
        {" "}
        {showFavorites ? (
          <HeartFill size={30} color="red" />
        ) : (
          <HeartFill size={30} color="white" />
        )}
      </Button>
    </>
  );

  const hideButton = () => (
    <button
      onClick={() => toggleShowFilters()}
      type="button"
      className="close"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  );

  const mobileFilters = () => (
    <>
      <Col xs={1}></Col>
      <Col xs={8}>
        {bedroomFilters()}
        {categoryFilters()}
        {maxPriceFilters()}
      </Col>
      <Col xs={1}></Col>
      <Col xs={2}>
        <Row>{filterButton()}</Row>
        <Row>{favoriteButton()}</Row>
        <Row>{hideButton()}</Row>
      </Col>
    </>
  );

  const largeFilters = () => (
    <>
      <Col sm={3} className="filter">
        {bedroomFilters()}
      </Col>
      <Col sm={3} className="filter">
        {categoryFilters()}
      </Col>
      <Col sm={3} className="filter">
        {maxPriceFilters()}
      </Col>
      <Col sm={3}>
        {filterButton()}
        {favoriteButton()}
        {hideButton()}
      </Col>
    </>
  );

  return (
    <>
      <Form inline className="filter-form">
        <Form.Row className="d-xs-block d-sm-none">{mobileFilters()}</Form.Row>
        <Form.Row className="d-sm-inline-flex d-none filter-row-container">
          {largeFilters()}
        </Form.Row>
      </Form>
      {showFavorites && (
        <div className="favorite-count">
          {favorites.length > 0 ? (
            <h4>Showing {favorites.length} Favorite Properties</h4>
          ) : (
            <h4>You have no favorite Properties</h4>
          )}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  showFavorites: state.favoriteReducer,
  favorites: state.favoriteReducer,
});

export default connect(mapStateToProps, { toggleShowFavorites })(Filters);
