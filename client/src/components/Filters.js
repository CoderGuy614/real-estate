import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import { connect } from "react-redux";
import { toggleShowFavorites } from "../actions/favorite";
import { HeartFill } from "react-bootstrap-icons";

const Filters = ({
  favorites: { favorites },
  showFavorites: { showFavorites },
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
        <Form.Label className="d-none d-sm-block">Bedrooms</Form.Label>
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
      </>
    );
  };

  const categoryFilters = () => {
    return (
      <>
        <Form.Label className="d-none d-sm-block">Type</Form.Label>
        <Form.Control
          disabled={showFavorites}
          as="select"
          onChange={typeSelect}
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
      </>
    );
  };

  const maxPriceFilters = () => {
    return (
      <>
        <Form.Label className="d-none d-sm-block">Price</Form.Label>
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
      </>
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

  return (
    <>
      <Form className="filter-form">
        <Form.Row>
          <Col xs={12} sm={3} className="filter">
            {bedroomFilters()}
          </Col>
          <Col xs={12} sm={3} className="filter">
            {categoryFilters()}
          </Col>
          <Col xs={12} sm={3} className="filter">
            {maxPriceFilters()}
          </Col>
          <Col xs={6} sm={2}>
            {filterButton()}
          </Col>
          <Col xs={6} sm={1}>
            {favoriteButton()}
          </Col>
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
