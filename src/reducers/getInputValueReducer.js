import {GET_INPUT_VALUE} from "../actions/types";

const INITIAL_STATE = {searchTerm: ''}

const getInputValueReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_INPUT_VALUE:
            return {...state, searchTerm: action.term}
        default:
            return state;
    }
}

export default getInputValueReducer