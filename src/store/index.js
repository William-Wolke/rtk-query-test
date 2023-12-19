import { configureStore } from '@reduxjs/toolkit';
import bookApi from './api/bookApi';
import bookSlice from './slice/bookSlice';

export const store = configureStore({
    reducer: {
        [bookApi.reducerPath]: bookApi.reducer,
        book: bookSlice,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(bookApi.middleware),
});
