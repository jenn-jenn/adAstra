import axios from 'axios';

export const getImages = () => {
    return axios.get("/api/images/");
}

export const uploadImage = (data) => {
    debugger
    return axios
      .post("/api/images/uploadImage", data)
      .catch(err => console.log(err));
}