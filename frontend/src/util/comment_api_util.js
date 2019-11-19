import axios from 'axios';

export const getAllComments = () => {
    return axios.get("/api/comments");
}

export const getCommentsbyPost = id => {
    return axios.get(`/api/comments/posts/${id}`)
}

export const writeComment = data => {
    return axios.post(`/api/comments/new`, data)
}