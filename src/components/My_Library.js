// import axios from "axios";




function Favorites(props) {
  console.log(props)
  return (
    <div>
      <h1>My Library</h1>
      {props.favorites.map((book, index) => (
      <div key={index}>
        <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title}/>
        <h2>{book.volumeInfo.title}</h2>
        <h2>{book.volumeInfo.authors}</h2>
        <h3>{book.volumeInfo.categories}</h3>
        <p>{book.volumeInfo.desription}</p>
        <a href={book.volumeInfo.previewLink}><button>Preview</button></a>
     </div>
      ))}
    </div>
  );
}

export default Favorites;