import { combineReducers } from "redux";
import { themeReducer } from "./globalReducer";

export default combineReducers({
    themeToggle: themeReducer
})