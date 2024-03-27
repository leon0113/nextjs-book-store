import BookList from "../components/BookList";
import { getAllBooks } from "../lib/fake-data"


const Store = () => {
    const books = getAllBooks();
    return (
        <div className="md:ml-36">
            <BookList books={books} />
        </div>
    )
}

export default Store