import { useGetBooksQuery } from './store/api/bookApi';

export default function Book() {
    const { data, error, isLoading, isUninitialized, refetch } =
        useGetBooksQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Oh no, there was an error</div>;
    }

    return (
        <div className='container'>
            <h1>Books</h1>
            <ul>
                {data.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
            <button onClick={refetch}>Refetch</button>
        </div>
    );
}
