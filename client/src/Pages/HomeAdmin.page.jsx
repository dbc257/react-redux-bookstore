import React, { useState, useEffect } from "react";
import BootstrapCardAdmin from "../components/BootstrapCardAdmin.component";
import CardColumns from "react-bootstrap/CardColumns";

function HomeAdmin() {
  const [books, setBooks] = useState([]);

  let fetchBooks = () => {
    fetch("https://react-redux-bookstore-server.herokuapp.com/")
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
              <BootstrapCardAdmin
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

export default HomeAdmin;
