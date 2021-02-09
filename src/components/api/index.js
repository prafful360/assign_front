import axios from "axios";
export const list = () => {
  return axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
};
