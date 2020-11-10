import {applyMiddleware, createStore} from "redux";
import accountReducer from "../reducers/AccountReducer";
import thunk from "redux-thunk";

const initialState = {
    user: {},
    error: ''
};

export const store = createStore(accountReducer, initialState, applyMiddleware(thunk));