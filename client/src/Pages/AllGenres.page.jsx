import React, { useState, useEffect } from "react";
import BootstrapCardNoAuth from "../components/BootstrapCardNoAuth.component";
import CardDeck from "react-bootstrap/CardDeck";
// import { LinkContainer } from "react-router-bootstrap";

function AllGenres() {
  const [books, setBooks] = useState([]);
  let fetchBooks = () => {
    fetch("https://bookstrap-bookstore-server.herokuapp.com/")
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

export default AllGenres;
