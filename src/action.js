import { CHANGE_SEARCH_FIELD, REQUEST_ROBOT_FAILED, REQUEST_ROBOT_PENDING, REQUEST_ROBOT_SUCCESS } from "./constants";

export const setSearchfield = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})


export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOT_PENDING })
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_ROBOT_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOT_FAILED, payload: error }))
}