import { combineReducers } from "redux";
import session from "./session_api_reducer";
import errors from "./errors_reducer";
import comments from "./comment_reducer";
import users from "./users_reducer";
import entities from "./entities_reducer";
import weather from "./weather_reducer";
import sunset from "./sunset_reducer";
import uiReducer from "./ui_reducer";

const RootReducer = combineReducers({
  errors,
  session,
  comments,
  users,
  weather,
  sunset,
  entities, 
  uiReducer
});

export default RootReducer;
