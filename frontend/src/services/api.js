const API_KEY = "AIzaSyCCxDkGkZOE0dxE22ezn2Zpn_v-oXjUHGE";
const BASE_URL = "https://www.googleapis.com/books/v1/volumes" 

export const getPopularMovies = async()=> {
    const response = await fetch(`${BASE_URL}?q=fiction&key=${API_KEY}`);
    const data = await response.json();
    console.log("API response:", data);
    return data.items|| [];
};

export const searchMovie = async (query) => {
    const response = await fetch(
        `${BASE_URL}?q=${encodeURIComponent(query)}&key=${API_KEY}`
    );
    const data = await response.json();
    return data.items|| [];
    
};