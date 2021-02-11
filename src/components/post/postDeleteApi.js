import axios from "axios";

export const remove = (postId) => {
  return axios
    .delete(`https://jsonplaceholder.typicode.com/post/${postId}`)
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
};
