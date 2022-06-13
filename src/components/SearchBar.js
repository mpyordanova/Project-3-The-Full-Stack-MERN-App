import React from 'react'

const SearchBar = ({search, handleChange, handleSubmit}) => {
  return (
    <div className='search-container'>

         <form onSubmit={handleSubmit}>
          <label className="search-title" htmlFor="search">Search Book by:</label><br/>
          {/* <select id="type" name="type" onChange={handleChange} >
          <option value="word" >Word</option>
            <option value="title" >Title</option>
            <option value="authors" >Author</option>
            <option value="category" >Category</option>
          </select> */}
          {/* the search field */}
          <input className='search-input' type="text" id="search" name="search" placeholder="Search" onChange={handleChange} />         
           {/* <button type="submit" name= 'search' className="submitBtn">Search</button> */}
             
           
        </form>
    </div>
  )
}

export default SearchBar;