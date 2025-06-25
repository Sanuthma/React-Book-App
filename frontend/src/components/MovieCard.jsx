import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext";
function MovieCard({ movie }) {
const info = movie.volumeInfo;

    const title = info.title || "Untitled";
    const authors = info.authors ? info.authors.join(", ") : "Unknown Author";
    const publishedDate = info.publishedDate || "No date";
    const thumbnail = info.imageLinks?.thumbnail || "https://via.placeholder.com/128x193.png?text=No+Cover";

    const {isFavourite, addToFavourites, removeFromFavourites} = useMovieContext()
    const favourite = isFavourite(movie.id)

    function onFavouriteClick(){
        e.preventDefault()
        if (favourite) removeFromFavourites(movie.id)
            else addToFavourites(movie)
    }
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={thumbnail} alt={title}/>
            <div className="movie-overlay">
                <button className={`favourite-btn ${favourite ? "active" : ""}`} onClick={onFavouriteClick}>   
                    🤍
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{title}</h3>
            <p>{authors}</p>
                <p>{publishedDate}</p>
        </div>
    </div>
}

export default MovieCard
