import Bookcard from "./Bookcard"

export default function BookList({ books }) {
    return (
        <div className=" flex flex-wrap flex-col md:flex-row justify-center items-center md:gap-5 md:mt-10 md:mx-10">
            {
                books.map((book) => {
                    return (
                        <Bookcard key={book.id} book={book} />
                    )
                })
            }
        </div>
    )
}
