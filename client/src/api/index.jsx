import axios from 'axios';

const url = 'http://localhost:5000/posts';

axios.defaults.baseURL = `http://localhost:5000`; // set our API server url
axios.defaults.withCredentials = true;
//const url = "http://localhost:5000/posts";
export const fetchPosts = async () => {
  try {
    let res = await axios.get("/posts");
    console.log(res.data);
    return res;
  } catch (err) {
    console.log(err);
  }
};

// export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
