import axios from "axios";

export const getAllUsers = () => {
    return axios.get("/api/users/all");
}