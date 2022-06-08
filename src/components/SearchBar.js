import React from 'react'

const SearchBar = (props) => {
  return (
    <div className='search-box'>
         <form onSubmit={props.handleSubmit}>
          <label htmlFor="search">Search Book by:</label><br/>
          <select id="type" name="type" onChange={props.handleChange} >
            <option value="title" >Title</option>
            <option value="authors" >Author</option>
            <option value="category" >Category</option>
          </select>
          <input type="text" id="search" name="search" onChange={props.handleChange} />
           <input type="submit" />
           
        </form>
    </div>
  )
}

export default SearchBar;