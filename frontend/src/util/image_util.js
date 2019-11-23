import axios from 'axios';

export const getImages = () => {
    return axios.get("/api/images/");
}

export const uploadImage = (data) => {
    return axios
      .post("/api/images/uploadImage", data)
    .catch(err => console.log(err));
}

export const uploadImageToDB = (imgData) => {
    return axios
        .post("/api/images/uploadImageDB", imgData)
        .catch(err => console.log(err));
}