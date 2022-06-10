import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useState, useEffect, useReducer } from 'react'
import axios from "axios"
import { Routes, Route, useNavigate } from 'react-router-dom'
import Favorites from './components/My_Library';
import Books from './components/Books';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return [...state, action.book];
      default:
       throw new Error()
  }
}

function App() {

  const [search, setSearch] = useState({ search: '' })
  const [books, setBooks] = useState([])
  const [favorites, dispatch] = useReducer(reducer,[]);
  

  // console.log(books)
  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(search)
    const fetchBooks = async () => {
      const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=
      ${search.search}&key=${process.env.REACT_APP_API_KEY}&maxResults=20`)
      console.log(res.data.items);
      setBooks(res.data.items)
    }
    fetchBooks()
  }
  function handleChange(event) {
    // name from html part
    setSearch({ ...search, [event.target.name]: event.target.value });
  }
  return (
    <div className="App">
      <Header />
      <Navbar search={search} handleChange={handleChange} handleSubmit={handleSubmit} />
      {/* <Home books={books} dispatch={dispatch} /> */}
      <Footer />
      

       <Routes>  
        
         <Route path='/Favorites' element={<Favorites books={books} favorites={favorites}/>} />
         <Route path='/' element={<Home books={books} dispatch={dispatch} handleSubmit={handleSubmit} handleChange={handleChange} />} />
        {/* <Route path='/Books' element={<Book setSearch={setSearch} />} /> */}
      {/* <Route path='/author' element={<Author apiResponse={apiResponse}/>} /> */}
      </Routes> 
    </div>
  );
}

export default App;
