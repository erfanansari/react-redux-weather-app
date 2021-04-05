import {FETCH_DATA} from "../actions/types";

const INITIAL_STATE = {}

const dataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return action.payload
        default:
            return state;
    }
}

export default dataReducer