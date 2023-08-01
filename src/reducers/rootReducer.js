import changeCount from "./index";
import { combineReducers } from "redux";
import mulNumber from "./multDiv";

const rootReducer = combineReducers({
    changeCount,
    mulNumber
})
export default rootReducer;