import React from 'react'

const SearchBar = ({search, handleChange, handleSubmit}) => {
  return (
    <div className='search-box'>
         <form onSubmit={handleSubmit}>
          <label htmlFor="search">Search Book by:</label><br/>
          <select id="type" name="type" onChange={handleChange} >
          <option value="word" >Word</option>
            <option value="title" >Title</option>
            <option value="authors" >Author</option>
            <option value="category" >Category</option>
          </select>
          <input type="text" id="search" name="search" onChange={handleChange} />         
           <input type="submit" className="submitBtn"/>
             
           
        </form>
    </div>
  )
}

export default SearchBar;