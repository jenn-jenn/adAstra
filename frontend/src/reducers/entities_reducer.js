import { combineReducers } from "redux";
import CosmicObjectsReducer from "./cosmic_objects_reducer";
import calendarsReducer from "./calendar_reducer";
import PostReducer from "./posts_reducer";
import ImageReducer from "./image_reducer";
import EventReducer from "./events_reducer";

export default combineReducers({
  calendars: calendarsReducer,
  cosmicObjects: CosmicObjectsReducer,
  posts: PostReducer,
  images: ImageReducer,
  events: EventReducer
});
