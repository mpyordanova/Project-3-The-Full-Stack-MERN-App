import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react'
import axios from "axios"

function App() {

  const [search, setSearch] = useState({ search: '' })
  const [books, setBooks] = useState([])
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
      <Home books={books} />
      <Footer />


      {/* <Routes>  
        <Route path='/' element={<Home handleSubmit={handleSubmit} handleChange={handleChange} />} />
        <Route path='/book' element={<Book apiResponse={apiResponse} />} />
        <Route path='/title' element={<Book apiResponse={apiResponse} />} />
        <Route path='/author' element={<Author apiResponse={apiResponse}/>} />
       </Routes> */}
    </div>
  );
}

export default App;
