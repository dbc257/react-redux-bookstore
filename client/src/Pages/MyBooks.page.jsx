// import React from "react";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
// import BootstrapCard from "./components/BootstrapCard.component";

function MyBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://bookstrap-bookstore-server.herokuapp.com/")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setBooks(result);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jsonwebtoken");

    fetch("https://bookstrap-bookstore-server.herokuapp.com/api/my-books", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  const bookList = books.map((book, index) => {
    return (
      <CardDeck key={index}>
        <Card key={index} style={{ width: 200 }}>
          <Card.Img
            variant="top"
            style={{ width: 200 }}
            src={book.imageURL}
            alt="image"
          />
          <Card.Body style={{ width: 200 }}>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>{book.genre}</Card.Text>
          </Card.Body>
          <Card.Footer style={{ width: 200 }}>
            <small className="text-muted">
              Published: {book.publisher} - {book.year}
            </small>
          </Card.Footer>
        </Card>
      </CardDeck>
    );
  });
  return <> {bookList} </>;
}
export default MyBooks;

// class Books extends Component {
//   constructor() {
//     super();
//     this.state = {
//       books: [],
//     };
//   }
//   componentDidMount() {
//     fetch("https://bookstrap-bookstore-server.herokuapp.com/books")
//       .then((response) => response.json())
//       .then((bookResults) => {
//         console.log(bookResults);
//         this.setState({
//           books: bookResults,
//         });
//       });
//   }
//   render() {
//     console.log(this.state.books);
//     // let liItems = this.state.books.map((book) => <li>{book.title}</li>);
//     return (
//       <ul>
//         {this.state.books.length > 0 ? (
//           this.state.books.map((book) => {
//             return (
//               //   <CardDeck>
//               <Card>
//                 <Card.Img variant="top" src={book.imageURL} alt="image" />
//                 <Card.Body>
//                   <Card.Title>{book.title}</Card.Title>
//                   <Card.Text>
//                     Published: {book.publisher} - {book.year}
//                   </Card.Text>
//                 </Card.Body>
//                 <Card.Footer>
//                   <small className="text-muted">Genre: {book.genre}</small>
//                 </Card.Footer>
//               </Card>
//               //   </CardDeck>
//             );
//           })
//         ) : (
//           <></>
//         )}
//       </ul>
//     );
//   }
// }
