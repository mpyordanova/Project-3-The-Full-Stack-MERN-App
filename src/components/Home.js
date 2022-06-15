import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Rating from './Rating'



const Home = ({ books, dispatch }) => {
 console.log(books)
useEffect(() => {
}, [])

  return (
    <div>
      <section className='grid'>
        {books?.map((book) => { 
          const { kind, selfLink, volumeInfo, id, imageLinks, previewLink, infoLink } = book
          return (
            <article key={id}>
              <div className='card'>
                <div className='left-top'>
                  <img src={volumeInfo.imageLinks?.thumbnail} alt={volumeInfo.title} className="block" />
                </div>
                <div className='right-bottom'>
                  <h2>{volumeInfo.title}</h2>
                  <h3>{volumeInfo.authors?.[0]}</h3>
                  {/* <h3>{volumeInfo.averageRating}</h3> */}
                  <h3>{volumeInfo.categories}</h3>
                  <a href={volumeInfo.previewLink}><button>Preview</button></a>
                  <button className='addtoLib' onClick={() => dispatch({type: 'increment', book})}>Add to Library</button>
                
                </div>
              </div>

            </article>
          )
        })}
      </section>

      </div>
  )
}

export default Home