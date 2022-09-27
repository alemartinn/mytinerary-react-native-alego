import { configureStore } from "@reduxjs/toolkit";
import citiesAPI from "./features/citiesAPI";
import commentsAPI from "./features/commentAPI";
import itinerariesAPI from "./features/itinerariesAPI";
import activitiesAPI from "./features/activitiesAPI";
import useReducer from "./features/userSlice";
import {authAPI} from "./features/authAPi";

export default configureStore ({
    reducer: {
        user: useReducer,
        [citiesAPI.reducerPath] : citiesAPI.reducer,
        [itinerariesAPI.reducerPath] : itinerariesAPI.reducer,
        [commentsAPI.reducerPath] : commentsAPI.reducer,
        [activitiesAPI.reducerPath] : activitiesAPI.reducer,
        [authAPI.reducerPath] : authAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(citiesAPI.middleware).concat(itinerariesAPI.middleware).concat(activitiesAPI.middleware).concat(commentsAPI.middleware).concat(authAPI.middleware)
})