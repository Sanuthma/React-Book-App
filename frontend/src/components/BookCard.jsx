import "../css/BookCard.css"
import { useBookContext } from "../contexts/BookContext";
import { useNavigate } from "react-router-dom";
function BookCard({ book }) {
const info = book.volumeInfo;
const navigate = useNavigate();

    const title = info.title || "Untitled";
    const authors = info.authors ? info.authors.join(", ") : "Unknown Author";
    const publishedDate = info.publishedDate || "No date";
    const thumbnail = info.imageLinks?.thumbnail || "https://via.placeholder.com/128x193.png?text=No+Cover";

    const {isFavourite, addToFavourites, removeFromFavourites} = useBookContext()
    const favourite = isFavourite(book.id)

    function onFavouriteClick(e){
        e.preventDefault()
        e.stopPropagation()
        if (favourite) removeFromFavourites(book.id)
            else addToFavourites(book)
    }

    function handleCardClick() {
        navigate(`/book/${book.id}`)
    }
    return <div className="book-card" onClick={handleCardClick}>
        <div className="book-poster">
            <img src={thumbnail} alt={title}/>
            <div className="book-overlay">
                <button className={`favorite-btn ${favourite ? "active" : ""}`} onClick={onFavouriteClick}>   
                    {favourite ? "❤️" : "🤍"}
                </button>
            </div>
        </div>
        <div className="book-info">
            <h3>{title}</h3>
            <p>{authors}</p>
                <p>{publishedDate?.split("-")[0]}</p>
        </div>
    </div>
}

export default BookCard
