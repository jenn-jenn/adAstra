import axios from "axios";

export const createEvent = event => {
    return axios.post('/api/events/new', data);
};

export const getEvents = () => {
    return axios.get(`/api/events`);
};

export const getEventsbyDate = id => {
    return axios.get(`/api/events/dates/${id}`)
}

export const getAnEvent = (eventId) => {
    return axios.get(`/api/events/${eventId}`);
};

export const editEvent = (eventId, event) => {
    return axios.patch(`/api/events/${eventId}`, event);
};

export const deleteEvent = (eventId) => {
    return axios.delete(`/api/events/${eventId}`);
};

