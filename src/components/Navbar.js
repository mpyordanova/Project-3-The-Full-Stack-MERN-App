import React from 'react'
import SearchBar from './SearchBar'
const Navbar = ({search, handleChange, handleSubmit}) => {
  return (
    <div>Navbar
       <SearchBar search={search} handleChange={handleChange} handleSubmit={handleSubmit}/>
    </div>
   
  )
}

export default Navbar
// props.seach or