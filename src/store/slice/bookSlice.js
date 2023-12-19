import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: '',
    author: '',
    year: 0,
};

export const bookSlice = createSlice({
    name: 'createBook',
    initialState,
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        },
        setAuthor: (state, action) => {
            state.author = action.payload;
        },
        setYear: (state, action) => {
            state.year = action.payload;
        },
        reset: (state) => {
            state = initialState;
        },
    },
});

export const { setTitle, setAuthor, setYear, reset } = bookSlice.actions;

export default bookSlice.reducer;
