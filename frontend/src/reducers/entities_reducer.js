import { combineReducers } from "redux";
import cosmicObjects from "./cosmic_objects_reducer";
import calendars from "./calendar_reducer";
import posts from "./posts_reducer";
import images from "./image_reducer";
import events from "./events_reducer";
import comments from "./comment_reducer";
import users from "./users_reducer";
import weather from "./weather_reducer";
import sunset from "./sunset_reducer";

export default combineReducers({
  calendars,
  cosmicObjects,
  posts,
  images,
  events,
  comments,
  users,
  weather,
  sunset
});
