import {
  RECEIVE_COSMIC_OBJECTS
} from "../actions/cosmic_objects_actions";

const CosmicObjectsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_COSMIC_OBJECTS:
      return action.cosmicObjects.data;
    default:
      return state;
  }
};

export default CosmicObjectsReducer;
