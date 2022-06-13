import React from 'react'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import DropDown from './DropDown'
 

const Navbar = ({ search, handleChange, handleSubmit, Dropdown }) => {

  return (
    <div className='navbar'>
    {/* //   <div className='nav-list'>
    //     <Link to='/'>Home</Link>
    //     <Link to='/Favorites'>My Library</Link>
    //   </div> */}
      <SearchBar search={search} handleChange={handleChange} handleSubmit={handleSubmit} />
      <DropDown />
    </div>

  )
}

export default Navbar;
// props.seach if I use (props) or if I list them on top in (search, handleChange etc) I don't have to write props.search/ props.handleChange...