import axios from "axios";

export const createDate = date => {
    return axios.post('/api/events/', date);
};

export const getDates = (userId) => {
    return axios.get(`/api/events/user/${userId}`);
};

export const getDate = (dateId) => {
    return axios.get(`/api/events/${dateId}`);
};

export const editDate = (dateId, date) => {
    return axios.patch(`/api/events/${dateId}`, date);
};






