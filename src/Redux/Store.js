import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const Store = configureStore({
    reducer: {
        // [audioApi.reducerPath]: audioApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        // getDefaultMiddleware().concat(audioApi.middleware),
        getDefaultMiddleware(),
});

setupListeners(Store.dispatch);