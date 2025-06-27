const API_KEY = "AIzaSyCCxDkGkZOE0dxE22ezn2Zpn_v-oXjUHGE";
const BASE_URL = "https://www.googleapis.com/books/v1/volumes" 

export const getPopularBooks = async()=> {
    const response = await fetch(`${BASE_URL}?q=fiction&key=${API_KEY}`);
    const data = await response.json();
    console.log("API response:", data);
    return data.items|| [];
};

export const searchBook = async (query) => {
    const response = await fetch(
        `${BASE_URL}?q=${encodeURIComponent(query)}&key=${API_KEY}`
    );
    const data = await response.json();
    return data.items|| [];
    
};

export const getBookById = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}?key=${API_KEY}`);
    if (!response.ok) {
        throw new Error('Failed to fetch book details');
    }
    const data = await response.json();
    return data;
};