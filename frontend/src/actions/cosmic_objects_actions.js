import { getCosmicObjects } from "../util/cosmic_object_api_util";

export const RECEIVE_COSMIC_OBJECTS = "RECEIVE_COSMIC_OBJECTS";

export const receiveCosmicObjects = cosmicObjects => ({
  type: RECEIVE_COSMIC_OBJECTS,
  cosmicObjects
});

export const fetchCosmicObjects = () => dispatch =>
  getCosmicObjects()
    .then(cosmicObjects => dispatch(receiveCosmicObjects(cosmicObjects)))
    .catch(err => console.log(err));