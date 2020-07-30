import React, { useState, useEffect } from "react";
import BootstrapCardNoAuth from "../components/BootstrapCardNoAuth.component";
import CardDeck from "react-bootstrap/CardDeck";
// import { connect } from "react-redux";
// import * as actionCreators from "../store/creators/actionCreators";

function Fiction(props) {
  const [books, setBooks] = useState([]);
  let fetchBooks = () => {
    fetch("https://bookstrap-bookstore-server.herokuapp.com/fiction")
      .then((response) => response.json())
      .then((result) => {
        setBooks(result);
      });
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <>
      <div className="App container">
        <CardDeck>
          {books.map((bookLoop, index) => {
            return (
              <BootstrapCardNoAuth
                key={index}
                books={bookLoop}
                fetchBooks={fetchBooks}
              />
            );
          })}
        </CardDeck>
      </div>
    </>
  );
}
// const mapStateToProps = (state) => {
//   return {
//     // global state counter is now available in property called books
//     books: state.booksRed.books,
//   };
// };
export default Fiction;
// export default connect(mapStateToProps, null)(Fiction);
