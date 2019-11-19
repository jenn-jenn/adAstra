import { combineReducers } from "redux";
import session from "./session_api_reducer";
import errors from "./errors_reducer";
import posts from './posts_reducer';

const RootReducer = combineReducers({
  errors,
  session,
  posts
});

export default RootReducer;
