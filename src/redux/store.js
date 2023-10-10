import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from './feature/authSlice';

const rootReducer = combineReducers({
    auth: authReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;