import React, { useContext } from 'react'
import SearchBar from './SearchBar'
import MyLibrary from './My_Library'
import { Link } from 'react-router-dom'


const Navbar = ({ search, handleChange, handleSubmit }) => {

  return (
    <div className='navbar'>Navbar
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/Favorites'>My Library</Link>
      </li>

      <SearchBar search={search} handleChange={handleChange} handleSubmit={handleSubmit} />

    </div>

  )
}

export default Navbar;
// props.seach if I use (props) or if I list them on top in (search, handleChange etc) I don't have to write props.search/ props.handleChange...