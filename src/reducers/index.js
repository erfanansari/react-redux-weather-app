import {combineReducers} from "redux";
import dataReducer from "./dataReducer";
import getInputValueReducer from './getInputValueReducer'
import LoadingReducer from "./LoadingReducer";
export default combineReducers({
    data: dataReducer,
    searchTerm: getInputValueReducer,
    Loading : LoadingReducer
})