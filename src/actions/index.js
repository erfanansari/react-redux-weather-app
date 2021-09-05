import {FETCH_DATA, GET_INPUT_VALUE,CHANGE_LOADING_STATUS} from "./types";


const params = {
    key: 'ad72626cde58d6cc809215002ca974cd',
    baseURI: 'https://api.openweathermap.org/data/2.5/'
}

export const fetchData = () => async (dispatch, getState) => {
    const response = await fetch(`${params.baseURI}weather?q=${getState().searchTerm}&units=metric&APPID=${params.key}`)
    const data = await response.json()
    dispatch({type: FETCH_DATA, payload: data})
}

export const getInputValue = (searchTerm) => {
    return {
        type: GET_INPUT_VALUE,
        payload: searchTerm
    }
}
export const ChangeLoadingStatus = (status) => ({
    type: CHANGE_LOADING_STATUS,
    payload: status
})