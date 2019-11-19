import { getAllUsers  } from "../util/users_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveUsers = users => {
    return({
        type: RECEIVE_USERS,
        users
    })
}

export const receiveErrors = errors => {
    return({
        type: RECEIVE_SESSION_ERRORS,
        errors
    })
};

export const fetchUsers = () => dispatch =>
    getAllUsers()
    .then(users => dispatch(receiveUsers(users)))
    .catch(err => dispatch(receiveErrors(err)));