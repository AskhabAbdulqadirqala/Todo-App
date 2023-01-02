import { combineReducers } from "redux";
import { todoAppReducer } from "./todoAppReducer";
import { authReducer} from "./authReducer";

export const rootReducer = combineReducers({
    todoAppReducer,
    authReducer
});