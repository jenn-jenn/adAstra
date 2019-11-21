import axios from "axios";

export const createDate = date => {
    return axios.post('/api/events/', date);
};

export const fetchAllDates = (userId) => {
    return axios.get(`/api/events/user/${userId}`);
};

export const fetchDate = (dateId) => {
    return axios.get(`/api/events/${dateId}`);
};

export const editDate = (dateId, date) => {
    return axios.patch(`/api/events/${dateId}`, date);
};

export const deleteDate = (dateId) => {
    return axios.delete(`/api/events/${dateId}`);
};





