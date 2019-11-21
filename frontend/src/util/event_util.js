import axios from "axios";

export const createEvent = event => {
    return axios.post('/api/events/new', data);
};

export const fetchEvents = () => {
    return axios.get(`/api/events`);
};

export const fetchEvent = (eventId) => {
    return axios.get(`/api/events/${eventId}`);
};

export const editEvent = (eventId, event) => {
    return axios.patch(`/api/events/${eventId}`, event);
};

export const deleteEvent = (eventId) => {
    return axios.delete(`/api/events/${eventId}`);
};

