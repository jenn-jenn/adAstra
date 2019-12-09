import { reverseGeolocation } from "../util/map_util";

export const fetchLocation = crd => dispatch => (
    reverseGeolocation(crd)
    .then( res => res )
);