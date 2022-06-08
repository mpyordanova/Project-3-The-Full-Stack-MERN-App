import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Navbar/>
      <Footer/>

      
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
