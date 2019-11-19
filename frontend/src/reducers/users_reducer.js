import { RECEIVE_USERS } from "../actions/user_actions";

const UsersReducer = (
    state = {}, action
) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_USERS:
            newState = action.users.data;
            return newState;
        default:
            return state;
    }
}

export default UsersReducer;