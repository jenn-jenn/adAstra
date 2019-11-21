import * as APIUtil from "../util/calendar_util";

export const RECEIVE_ALL_DATES = 'RECEIVE_ALL_DATES';
export const RECEIVE_DATE = 'RECEIVE_DATE';

export const receiveAllDates = dates => ({
    type: RECEIVE_ALL_DATES, 
    dates
});

export const receiveDate = date => ({
    type: RECEIVE_DATE, 
    date
});


export const fetchAllDates = (userId) => dispatch => (
    APIUtil.getDates(userId)
        .then(dates => dispatch(receiveAllDates(dates)))
);

export const fetchDate = (dateId) => dispatch => (
    APIUtil.getDate(dateId)
        .then(date => dispatch(receiveDate(date)))
);

export const changeDate = (dateId) => dispatch => (
    APIUtil.editDate(dateId)
        .then(date => dispatch(receiveDate(date)))
);

