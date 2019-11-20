import { RECEIVE_ALL_DATES, RECEIVE_DATE, REMOVE_DATE } from '../actions/calendar_actions';
import { strictEqual } from 'assert';

const calendarsReducer = (oldState={}, action) => {
    Object.freeze(oldState);

    switch(action.type) {
        case RECEIVE_ALL_DATES:
            return action.dates;
        case RECEIVE_DATE:
            let newState = Object.assign({}, oldState, {[action.dateId.data.id]: action.date.data });
            return newState;
        case REMOVE_DATE:
            newState = Object.assign({}, oldState);
            delete newState[action.dateId.data.id];
            return newState;
        default:
            return oldState;
    }
}

export default calendarsReducer;
