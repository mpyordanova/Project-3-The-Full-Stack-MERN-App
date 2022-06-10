import axios from "axios";




function Favorites(props) {
  console.log(props)
  return (
    <div>
      <h1>My Library</h1>
      {props.favorites.map((book, index) => (
      <div key={index}>{book.volumeInfo.title}
      <h2>{book.volumeInfo.authors}</h2>
       <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title}/>
     </div>
      ))}
    </div>
  );
}

export default Favorites;