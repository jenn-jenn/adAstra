import axios from "axios";

export const createEvent = data => {
    return axios.post('/api/events/new', data);
};

export const getEvents = () => {
    return axios.get(`/api/events`);
};

export const getEventsbyDate = date => {
    return axios.get(`/api/events/${date}`)
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

