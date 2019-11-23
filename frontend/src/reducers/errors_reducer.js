import { combineReducers } from "redux";
import SessionErrorsReducer from "./session_errors_reducer";
import ImageErrorReducer from "./image_error_reducer";

export default combineReducers({
  session: SessionErrorsReducer,
  image: ImageErrorReducer
});
