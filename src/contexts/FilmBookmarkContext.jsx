import { createContext, useContext, useEffect, useState } from "react";

const FilmBookmarkContext = createContext(null);

export const FilmBookmarkProvider = ({ children }) => {
    const [bookmarkedMovies, setBookmarkedMovies] = useState(() => {
        const localData = localStorage.getItem("bookmarkedMovies");

        return localData 
            ? JSON.parse(localData)
            : [];
    });

    useEffect(() => {
        localStorage.setItem("bookmarkedMovies", JSON.stringify(bookmarkedMovies));
    }, [bookmarkedMovies]);

    const toggleBookmark = (title) => {
        setBookmarkedMovies((prev) => {
            return prev.includes(title)
                ? prev.filter((t) => t != title)
                : [...prev, title];
        });
    };

    const checkIsBookmarked = (title) => bookmarkedMovies.includes(title);

    return (
        <FilmBookmarkContext.Provider value={{bookmarkedMovies, toggleBookmark, checkIsBookmarked}}>
            {children}
        </FilmBookmarkContext.Provider>
    );
}

export const useFilmBookmark = () => {
    const context = useContext(FilmBookmarkContext);

    if (!context)
        throw new Error("useFilmBookmark should be used inside FilmBookmarkProvider");

    return context;
}