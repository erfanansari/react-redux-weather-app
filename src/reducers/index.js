import {combineReducers} from "redux";
import dataReducer from "./dataReducer";
import getInputValueReducer from './getInputValueReducer'

export default combineReducers({
    data: dataReducer,
    searchTerm: getInputValueReducer
})