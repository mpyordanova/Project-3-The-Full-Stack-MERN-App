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
import DropDown from './components/DropDown'
import Article from './components/Article';

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
  const navigate = useNavigate()
  
// console.log(books)
  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log(search)
    const fetchBooks = async () => {
      const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=
      ${search.search}&key=${process.env.REACT_APP_API_KEY}&maxResults=20`)
      console.log(res.data.items);
      setBooks(res.data.items)
      navigate('/books')
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
      {/* <Article/> */}
      
      <Routes>  
        <Route path='/' element={<Article/>}/>       
         <Route path='/Favorites' element={<Favorites books={books} favorites={favorites} />} />
         <Route path='/Books' element={<Home books={books} dispatch={dispatch} handleSubmit={handleSubmit} handleChange={handleChange} />} />
      </Routes> 
      <Footer />
    </div>
  );
}

export default App;
