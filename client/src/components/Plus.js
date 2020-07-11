import React from "react";
import axios from "axios";
import Thumbnail from "./Thumbnail";
import Nav from "./Nav";

class Favorites extends React.Component {
  state = {
    houses: []
  };
  componentWillMount() {
    axios
      .get(`${process.env.REACT_APP_API}/houses?plus=true`)
      .then(res => {
        this.setState({ houses: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  houseHover = id => {
    let houses = this.state.houses;
    houses.map(h => {
      h.selected = false;
      return h;
    });
    let house = houses.find(h => h._id == id);
    house.selected = true;
    this.setState({ houses });
  };

  render() {
    return (
      <>
        <Nav />
        <div className="narrow">
          <div className="grid four large">
            {// List of thumbnails
            this.state.houses.map((house, index) => (
              <Thumbnail
                house={house}
                key={index}
                houseHover={this.houseHover}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Favorites;
