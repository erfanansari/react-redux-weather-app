import {CHANGE_LOADING_STATUS} from "../actions/types";

const INITIAL_STATE = false

const LoadingReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_LOADING_STATUS:
            return {...state, IsInLoading: action.payload}
        default:
            return state;
    }
}

export default LoadingReducer