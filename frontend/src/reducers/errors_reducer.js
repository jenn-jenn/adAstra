import { combineReducers } from "redux";
import session from "./session_errors_reducer";
import image from "./image_error_reducer";
import event from "./event_errors_reducer";
import post from "./post_error_reducer";

export default combineReducers({
  session,
  image,
  event,
  post
});
