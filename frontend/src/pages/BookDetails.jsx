import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBookById } from "../services/api";
import { useBookContext } from "../contexts/BookContext";
import "../css/BookDetails.css";

function BookDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { isFavourite, addToFavourites, removeFromFavourites } = useBookContext();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                setLoading(true);
                const bookData = await getBookById(id);
                setBook(bookData);
            } catch (err) {
                console.error(err);
                setError("Failed to load book details");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchBook();
        }
    }, [id]);

    const handleFavouriteClick = () => {
        if (!book) return;
        
        if (isFavourite(book.id)) {
            removeFromFavourites(book.id);
        } else {
            addToFavourites(book);
        }
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    if (loading) {
        return <div className="book-details loading">Loading book details...</div>;
    }

    if (error) {
        return (
            <div className="book-details error">
                <p>{error}</p>
                <button onClick={handleBackClick} className="back-btn">Go Back</button>
            </div>
        );
    }

    if (!book) {
        return (
            <div className="book-details error">
                <p>Book not found</p>
                <button onClick={handleBackClick} className="back-btn">Go Back</button>
            </div>
        );
    }

    const info = book.volumeInfo;
    const title = info.title || "Untitled";
    const authors = info.authors ? info.authors.join(", ") : "Unknown Author";
    const publishedDate = info.publishedDate || "No date";
    const description = info.description || "No description available";
    const pageCount = info.pageCount || "Unknown";
    const language = info.language || "Unknown";
    const publisher = info.publisher || "Unknown Publisher";
    const categories = info.categories ? info.categories.join(", ") : "Unknown";
    const thumbnail = info.imageLinks?.thumbnail || "https://via.placeholder.com/300x450.png?text=No+Cover";
    const largeImage = info.imageLinks?.large || info.imageLinks?.medium || thumbnail;

    const favourite = isFavourite(book.id);

    return (
        <div className="book-details">
            <div className="book-details-header">
                <button onClick={handleBackClick} className="back-btn">← Back</button>
            </div>

            <div className="book-details-content">
                <div className="book-cover-section">
                    <img src={largeImage} alt={title} className="book-cover-large" />
                </div>

                <div className="book-info-section">
                    <h1 className="book-title">{title}</h1>
                    <p className="book-authors">by {authors}</p>
                    
                    <div className="book-meta">
                        <div className="meta-item">
                            <span className="meta-label">Published:</span>
                            <span className="meta-value">{publishedDate}</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Publisher:</span>
                            <span className="meta-value">{publisher}</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Pages:</span>
                            <span className="meta-value">{pageCount}</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Language:</span>
                            <span className="meta-value">{language}</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Categories:</span>
                            <span className="meta-value">{categories}</span>
                        </div>
                    </div>

                    <div className="book-description">
                        <h3>Description</h3>
                        <div 
                            className="description-text"
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;