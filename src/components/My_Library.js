// import axios from "axios";




function Favorites(props) {
  console.log(props)
  return (
    <div >
      <h1>My Library</h1>
      {props.favorites.map((book, index) => (
      <div className="lib-card" key={index}>
        <img className="lib-card-img" src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title}/>
        <div className="lib-card-info">
        <h2>{book.volumeInfo.title}</h2>
        <h2>{book.volumeInfo.authors}</h2>
        <h3>{book.volumeInfo.categories}</h3>
        <h5>{book.volumeInfo.desription}</h5>
        <a href={book.volumeInfo.previewLink}><button>Preview</button></a>
        </div>
     </div>
      ))}
    </div>
  );
}

export default Favorites;