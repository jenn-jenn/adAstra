import { combineReducers } from "redux";
import session from "./session_api_reducer";
import errors from "./errors_reducer";
import calendar from "./calendar_reducer";

const RootReducer = combineReducers({
  errors,
  session,
  calendar
});

export default RootReducer;
