import {configureStore} from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice';
import { setupListeners } from "@reduxjs/toolkit/query";    
import {productsApi} from './service/dummyData';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [productsApi.reducerPath]: productsApi.reducer, // Add the products API reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware), // Add the products API middleware
});

// Optional: Setup listeners for the products API
setupListeners(store.dispatch);