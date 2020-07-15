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
      console.log({ err });
    });
};
