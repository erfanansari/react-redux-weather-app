import {FETCH_DATA} from "../actions/types";

const INITIAL_STATE = {data: {}}

const dataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_DATA:
            // return {...state,data:action.payload}
            return state.data = action.payload
        default:
            return state;
    }
}

export default dataReducer