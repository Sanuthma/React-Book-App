import MovieCard from "../components/MovieCard";
function Home(){
    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Wick", release_date: "2020"},
        {id: 3, title: "hn", release_date: "2020"},
        {id: 4, title: "Jok", release_date: "2020"},
    ];

    const  handlesearch = () =>{

    }
    return (
        <div className="home">
            <form onsubmit={handlesearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search for movies..." 
                    className="search-input"
                />
                <button 
                    type="submit" 
                    className="search-button"
                >
                    Search
                </button>
            </form>
            <div className="movie-grid">
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
    </div>
    );
}

export default Home