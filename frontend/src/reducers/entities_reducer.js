import { combineReducers } from "redux";

const entitiesReducer = combineReducers({
    calendars: calendarsReducer
});

export default entitiesReducer;