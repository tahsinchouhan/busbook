import { combineReducers } from "redux";
import authReducer from "./auth/reducer";

const reducers = combineReducers({ authReducer });
export default reducers;
