import React, { useState, useEffect } from "react";
import BootstrapCardNoAuth from "../components/BootstrapCardNoAuth.component";
import CardColumns from "react-bootstrap/CardColumns";

function Fiction(props) {
  const [books, setBooks] = useState([]);
  let fetchBooks = () => {
    fetch("https://react-redux-bookstore-server.herokuapp.com/fiction")
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
        <CardColumns>
          {books.map((bookLoop, index) => {
            return (
              <BootstrapCardNoAuth
                key={index}
                books={bookLoop}
                fetchBooks={fetchBooks}
              />
            );
          })}
        </CardColumns>
      </div>
    </>
  );
}

export default Fiction;
