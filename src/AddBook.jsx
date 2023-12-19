import { useAddBookMutation } from './store/api/bookApi';
import { useSelector, useDispatch } from 'react-redux';
import { setTitle, setAuthor, setYear, reset } from './store/slice/bookSlice';

export default function AddComputer() {
    const book = useSelector((state) => state.book);
    const dispatch = useDispatch();
    const [addBook, { data, isLoading, error }] = useAddBookMutation();

    async function onSubmit(event) {
        event.preventDefault();
        const success = await addBook(book);
        if (success.data) {
            dispatch(reset());
        }
    }
    return (
        <div className='container'>
            <h1>Add Book</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor='title'>Title</label>
                <input
                    type='text'
                    id='title'
                    value={book.title}
                    onChange={(e) => {
                        dispatch(setTitle(e.target.value));
                    }}
                />
                <label htmlFor='author'>Author</label>
                <input
                    type='text'
                    id='author'
                    value={book.author}
                    onChange={(e) => {
                        dispatch(setAuthor(e.target.value));
                    }}
                />
                <label htmlFor='year'>Year</label>
                <input
                    type='number'
                    id='year'
                    value={book.year}
                    onChange={(e) => {
                        dispatch(setYear(e.target.value));
                    }}
                />
                <button type='submit'>Submit</button>
            </form>
            {isLoading && <div>Loading...</div>}
            {error && <div>Oh no, there was an error</div>}
            {data && <div>Book added!</div>}
        </div>
    );
}
