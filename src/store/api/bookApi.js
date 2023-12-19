import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const bookApi = createApi({
    reducerPath: 'bookApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://127.0.0.1:3001',
    }),
    tagTypes: ['Book'],
    endpoints: (build) => ({
        getBooks: build.query({
            query: () => ({
                url: '/books',
            }),
            providesTags: ['Book'],
        }),
        getBook: build.query({
            query: (id) => `/${id}`,
            providesTags: ['Book'],
        }),
        addBook: build.mutation({
            query: (book) => ({
                url: '/books',
                method: 'POST',
                body: book,
            }),
            invalidatesTags: ['Book'],
        }),
        updateBook: build.mutation({
            query: (book) => ({
                url: `/books/${book.id}`,
                method: 'PUT',
                body: book,
            }),
            invalidatesTags: ['Book'],
        }),
        deleteBook: build.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Book'],
        }),
    }),
});

export default bookApi;

export const {
    useGetBooksQuery,
    useGetBookQuery,
    useAddBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation,
} = bookApi;
