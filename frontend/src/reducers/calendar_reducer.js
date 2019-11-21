import { RECEIVE_ALL_DATES, RECEIVE_DATE, REMOVE_DATE } from '../actions/calendar_actions';

const calendarsReducer = (oldState={}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_ALL_DATES:
            return action.dates;
        case RECEIVE_DATE:
            let newState = Object.assign({}, oldState, {[action.date.data._id]: action.date.data });
            return newState;
        case REMOVE_DATE:
            newState = Object.assign({}, oldState);
            delete newState[action.dateItem.data._id];
            return newState;
        default:
            return oldState;
    }
}

export default calendarsReducer;

