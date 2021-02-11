import axios from "axios";

export const update = (postId, post) => {
  console.log(postId, post);
  return axios
    .put(`https://jsonplaceholder.typicode.com/post/${postId}`, {
      data: post,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => console.log(err));
};
