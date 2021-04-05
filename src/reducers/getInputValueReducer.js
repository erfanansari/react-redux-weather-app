import {GET_INPUT_VALUE} from "../actions/types";

const INITIAL_STATE = '';

const getInputValueReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_INPUT_VALUE:
            return action.term
        default:
            return state;
    }
}

export default getInputValueReducer