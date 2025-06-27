import BookCard from "../components/BookCard";
import {useState, useEffect} from "react"
import { searchBook, getPopularBooks } from "../services/api"; 
import "../css/Home.css"
function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const [books, setBooks] = useState([]);
    const [error,setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularBooks = async () =>{
            try{
                const popularBooks = await getPopularBooks()
                setBooks(popularBooks);
            }catch(err){
                console.log(err)
                setError("Failed to load books...")
            }
            finally{
                setLoading(false)
            }
        }
        loadPopularBooks()
    },[])

    const handleSearch = async(e) =>{
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return
        
        setLoading(true)
        try{
            const searchResults = await searchBook(searchQuery)
            setBooks(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search books...")
        } finally {
            setLoading(false)
        }

    };
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for books..." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button 
                    type="submit" 
                    className="search-button"
                >
                    Search
                </button>
            </form>

            {error && <div className="error-message">{error}</div>}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <div className="books-grid">
                {books.map((book) => 
                     (<BookCard book={book} key={book.id}/>
            ))}
        </div>
            )}
            
    </div>
    ); 
}

export default Home