import { combineReducers } from "redux";
import SessionErrorsReducer from "./session_errors_reducer";
import ImageErrorReducer from "./image_error_reducer";
import PostErrorReducer from "./post_error_reducer";

export default combineReducers({
  session: SessionErrorsReducer,
  image: ImageErrorReducer,
  post: PostErrorReducer
});
