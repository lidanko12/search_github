import {  createReducer } from "@reduxjs/toolkit";
import {addRepositoriesSuccess,deleteRepositoriesSuccess,fetchRepositoriesSuccess, setCurrentPage,setClearCurrentPage} from './users-action';
import { combineReducers } from "redux";

let initialState = {
    repo:'',
    perPage: 12,
    currentPage: 1,
    totalCount:200,

};


const items = createReducer([],{
    [fetchRepositoriesSuccess]: (_, { payload }) => [...payload]
    ,
    [deleteRepositoriesSuccess]: (state, {payload}) =>
    state.filter(({id} ) => id !== payload),
    [addRepositoriesSuccess]: (state, { payload }) => [payload, ...state],
});
const currentPage = createReducer(initialState, {
    [setCurrentPage]: (_, { payload }) => payload,
    [setClearCurrentPage]:()=> initialState,
    
})


export default combineReducers({
    items,
    currentPage,
    
})