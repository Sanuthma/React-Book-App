import "../css/Favourites.css"
import { useBookContext } from "../contexts/BookContext"
import BookCard from "../components/BookCard"
function Favourites(){
    const { favourites } = useBookContext();

    if(favourites) {
        return (
            <div className="favourites">
            <h2>Your favourites</h2>
            <div className="books-grid">
                {favourites.map((book) => 
                     (<BookCard book={book} key={book.id}/>
            ))}
        </div> </div>);
    }
    return <div className="favourites-empty">
        <h2>No Favorite Books Yet </h2>
        <p>Start adding books to your favourites and they will appear here.</p>
    </div>
}

export default Favourites