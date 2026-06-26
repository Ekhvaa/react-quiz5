import React from 'react'
import icon from '../assets/SearchIcon.svg'

const SearchComponent = () => {
  return (
    <div className="m-5 flex h-fit gap-5">
        <img src={icon} alt="search" width="24" height="24"/>
        <input type="text" placeholder="Search For TV Series" className="text-white placeholder:text-gray-500 border-none focus:outline-none" />
    </div>
  )
}

export default SearchComponent