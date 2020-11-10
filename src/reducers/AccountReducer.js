import {AUTH_ERROR, DELETE_USER, SAVE_USER} from "../actions/AccountActions";

function accountReducer(state, action) {
    switch (action.type) {
        case SAVE_USER:
            return {...state, user: action.payload};
        case DELETE_USER:
            return {...state, user: ''};
        case AUTH_ERROR:
            return {...state, error: action.payload}
        default:
            return state;
    }
}

export default accountReducer;