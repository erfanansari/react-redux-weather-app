import {FETCH_DATA, GET_INPUT_VALUE} from "./types";


const api = {
    key: 'ad72626cde58d6cc809215002ca974cd',
    baseURI: 'https://api.openweathermap.org/data/2.5/'
}

export const fetchData = () => async (dispatch, getState) => {
    const response = await fetch(`${api.baseURI}weather?q=${getState().city.searchTerm}&units=metric&APPID=${api.key}`)
    const data = await response.json()
    console.log(data, 'data')
    console.log(getState())
    console.log(getState().city.searchTerm)
    dispatch({type: FETCH_DATA, payload: data})
}

export const getInputValue = (term) => {
    return {
        type: GET_INPUT_VALUE,
        term
    }
}
