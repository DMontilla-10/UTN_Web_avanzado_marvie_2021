import { combineReducers } from "redux";
import cuentaUnoReducer from "./cuentaUnoReducer";
import cuentaDosReducer from "./cuentaDosReducer";

export const todosLosReducers = combineReducers({
    cuentaUno: cuentaUnoReducer,
    cuentaDos: cuentaDosReducer
})