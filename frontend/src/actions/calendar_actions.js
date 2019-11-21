import * as APIUtil from "../util/calendar_util";

export const RECEIVE_ALL_DATES = 'RECEIVE_ALL_DATES';
export const RECEIVE_DATE = 'RECEIVE_DATE';
export const REMOVE_DATE = 'REMOVE_DATE';

export const receiveAllDates = dates => ({
    type: RECEIVE_ALL_DATES, 
    dates
});

export const receiveDate = date => ({
    type: RECEIVE_DATE, 
    date
});

export const removeDate = date_item => ({
    type: REMOVE_DATE, 
    dateItem
});

export const createDate = (date) => dispatch => (
    APIUtil.createDate(date) 
        .then(date => dispatch(receiveDate(date)))
);

export const fetchAllDates = (userId) => dispatch => (
    APIUtil.fetchAllDates(userId)
        .then(dates => dispatch(receiveAllDates(dates)))
);

export const fetchDate = (dateId) => dispatch => (
    APIUtil.fetchDate(dateId)
        .then(date => dispatch(receiveDate(date)))
);

export const editDate = (dateId) => dispatch => (
    APIUtil.editDate(dateId)
        .then(date => dispatch(receiveDate(date)))
);

export const deleteDate = (dateId) => dispatch => (
    APIUtil.deleteDate(dateId)
        .then(dateId => dispatch(removeDate(dateId)))
);
