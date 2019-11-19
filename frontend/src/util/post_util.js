import axios from "axios";

export const getPosts = () => {
    debugger
    console.log('getting all posts');
  return axios.get("/api/posts");
};

export const writePost = (data) => {
    console.log("writePost: ", data);
    return axios.post('/api/posts/', data);
};

// export const deletePost = (postId) => {
//     console.log("deletePost: ", postId);
//     return axios.delete(`/api/posts/${postId}`);
// }