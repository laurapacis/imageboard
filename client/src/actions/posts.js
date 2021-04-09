import * as api from '../api';

// Action Creators =>  functions that return 
// use thunk to fetch asynchronous data
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        // const action = { type: 'FETCH_ALL', payload: [] }
        // dispatch(action); // with thunk: instead of return -> dispatch
        dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {
        console.log(error.message);
    }  
}