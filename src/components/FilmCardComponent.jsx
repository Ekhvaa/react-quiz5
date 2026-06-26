import React from 'react'
import photo from '../assets/Rectangle.png'
import tv from '../assets/Nav3.svg'
import bookmarked from '../assets/bookmarkedIcon.svg'
import notBookmarked from '../assets/notBookmarkedIcon.svg'
import { useFilmBookmark } from '../contexts/FilmBookmarkContext'

const FilmCardComponent = ({ film }) => {
  const {bookmarkedMovies, toggleBookmark, checkIsBookmarked} = useFilmBookmark();

  return (
    <div className="flex flex-col gap-3 w-fit">
        <div className="relative">
            <a>
                <img src={film.thumbnail.regular.medium} alt="Photo"/>
            </a>
            <div className="absolute w-8 h-8 rounded-full bg-[#10141E]/50 cursor-pointer top-4 right-4 flex justify-center items-center" onClick={() => toggleBookmark(film.title)}>
                <img src={checkIsBookmarked(film.title) ? bookmarked : notBookmarked} alt="" className="w-[11px] h-[14px]"/>
            </div>
        </div>
        <div className="flex items-center gap-2">
            <span className="text-white">{film.year}</span>
            <span className="inline-block w-[5px] h-[5px] rounded-full bg-white"></span>
            <img src={tv}/>
            <span className="text-white">{film.category}</span>
            <span className="inline-block w-[5px] h-[5px] rounded-full bg-white"></span>
            <span className="text-white">{film.rating}</span>
        </div>
        <div className="text-white text-[18px]">
            <h2>{film.title}</h2>
        </div>
    </div>
  )
}

export default FilmCardComponent