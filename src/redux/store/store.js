import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import combineReducers from '../users/user-reducer'
import logger from 'redux-logger';
import storage from "redux-persist/lib/storage";
import { currentPage } from "../users/user-reducer";


const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// const authPersistConfig = {
//     key: 'auth',
//     storage,
//     whitelist: ['token'],
// };

const repoPersistConfig = {
  key: "items",
  storage,
}

export const store = configureStore({
  reducer: {
    repositories: persistReducer(repoPersistConfig, combineReducers),
  },
  middleware,
  devTools: true,
});
export const persistor = persistStore(store);
