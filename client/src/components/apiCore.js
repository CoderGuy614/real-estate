import axios from "axios";

export const getCategories = () => {
  return axios
    .get(`${process.env.REACT_APP_API}/categories`)
    .then((res) => {
      let catArray = [];
      res.data.map((cat) => catArray.push(cat.name));
      return catArray;
    })
    .catch((err) => console.log(err));
};

export const getProperties = () => {
  return axios
    .get(`${process.env.REACT_APP_API}/properties`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getProperty = (id) => {
  return axios
    .get(`${process.env.REACT_APP_API}/properties/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAmenities = (object) => {
  let amenities = [];
  let values = ["Fireplace", "Patio", "Fence", "Pool"];
  for (let key in object) {
    if (values.includes(key) && object[key] === true) {
      amenities.push(key);
    }
  }
  return amenities;
};
