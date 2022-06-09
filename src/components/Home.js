import React from 'react'

import {useState, useEffect} from 'react'
import axios from 'axios'

const Home = ({books}) => {
   

    useEffect(()=>{
       
    },[])
    console.log(books)
  return (
    <div>
        <h1>Books</h1>
        <section>
          {books.map((book)=> {
            const {kind, selfLink, volumeInfo,id, imageLinks, previewLink, infoLink}=book
            return (
              <article key={id}> 
              <div className='card'>
                <img src={volumeInfo.imageLinks?.smallThumbnail} alt={volumeInfo.title}/>
              </div>
              <div>
                <h2>{volumeInfo.title}</h2>
                <h2>{volumeInfo.authors?.[0]}</h2>
                <p>{volumeInfo.description}</p>

              </div>

              </article>
            )
          })}
        </section>


    </div>
  )
}

export default Home