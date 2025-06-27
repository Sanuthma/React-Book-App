import { createContext, useState, useContext, useEffect } from "react";

const BookContext = createContext()

export const useBookContext = () => useContext(BookContext)

export const BookProvider = ({children}) => {
    const [favourites, setFavourites] = useState([])

    useEffect(() =>{
        const storedFavs = localStorage.getItem("favourites")

        if (storedFavs) setFavourites(JSON.parse(storedFavs)) 
    }, [])

    useEffect(() =>{
        localStorage.setItem('favourites',JSON.stringify(favourites))
    }, [favourites])

    const addToFavourites = (book) => {
        setFavourites(prev => [...prev, book])
    }

    const removeFromFavourites = (bookID) => {
        setFavourites(prev => prev.filter(book=>book.id !== bookID))
    }

    const isFavourite = (bookID) => {
        return favourites.some(book => book.id === bookID)
    }

    const value = {
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite
    }

    return <BookContext.Provider value={value}>
        {children}
    </BookContext.Provider>
}
