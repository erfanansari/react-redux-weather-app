import {FETCH_DATA, GET_INPUT_VALUE} from "./types";


const params = {
    key: 'ad72626cde58d6cc809215002ca974cd',
    baseURI: 'https://api.openweathermap.org/data/2.5/'
}

export const fetchData = () => async (dispatch, getState) => {
    const response = await fetch(`${params.baseURI}weather?q=${getState().searchTerm}&units=metric&APPID=${params.key}`)
    const data = await response.json()
    dispatch({type: FETCH_DATA, payload: data})
}

export const getInputValue = (term) => {
    return {
        type: GET_INPUT_VALUE,
        term
    }
}
