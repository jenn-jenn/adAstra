import { combineReducers } from "redux";
import CosmicObjectsReducer from "./cosmic_objects_reducer";

export default combineReducers({
  cosmicObjects: CosmicObjectsReducer
});
