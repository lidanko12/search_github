import { createAction } from "@reduxjs/toolkit";

export const fetchRepositoriesRequest = createAction('user/fetchRepositoriesRequest');
export const fetchRepositoriesSuccess = createAction('user/fetchRepositoriesSuccess', ({items}) =>
    ({payload:[...items]})
);
export const fetchRepositoriesError = createAction('user/fetchRepositoriesError');

// export const fetchRepositorieRequest = createAction('user/fetchRepositorieRequest');
// export const fetchRepositorieSuccess = createAction('user/fetchRepositorieSuccess');
// export const fetchRepositorieError = createAction('user/fetchRepositorieError');

export const addRepositoriesRequest = createAction('user/addRepositoriesRequest');
export const addRepositoriesSuccess = createAction('user/addRepositoriesSuccess',);
export const addRepositoriesError = createAction('user/addRepositoriesError');


export const deleteRepositoriesRequest = createAction('user/deleteRepositoriesRequest');
export const deleteRepositoriesSuccess = createAction('user/deleteRepositoriesSuccess');
export const deleteRepositoriesError = createAction('user/deleteRepositoriesError');

export const setCurrentPage = createAction('user/setCurrentPage');
export const setClearCurrentPage= createAction('user/setClearCurrentPage')




