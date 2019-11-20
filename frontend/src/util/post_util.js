import axios from "axios";

export const getPosts = () => {
  return axios.get("/api/posts");
};

export const getAPost = (postId) => {
  return axios.get(`/api/posts${postId}`);
};

export const writePost = (data) => {
    return axios.post('/api/posts/', data);
};

export const deletePost = (postId) => {
    console.log("deletePost: ", postId);
    return axios.delete(`/api/posts/${postId}`);
}