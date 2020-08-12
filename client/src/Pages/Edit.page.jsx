import React, { useState, useEffect } from "react";

function Edit(props) {
  const [book, setBook] = useState({});

  function handleUpdateBookPost() {
    fetch("https://react-redux-bookstore-server.herokuapp.com/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
        props.history.push("/Home");
      });
  }

  function handleUpdateBook(e) {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    fetch(
      "https://react-redux-bookstore-server.herokuapp.com/edit/" +
        props.match.params.id
    )
      .then((response) => response.json())
      .then((result) => {
        setBook(result);
      });
  }, [props.match.params.id]);

  return (
    <div>
      <input
        type="text"
        value={book.imageURL}
        name="imageURL"
        onChange={handleUpdateBook}
      ></input>
      <input
        type="text"
        value={book.title}
        name="title"
        onChange={handleUpdateBook}
      ></input>
      <input
        type="text"
        value={book.genre}
        name="genre"
        onChange={handleUpdateBook}
      ></input>
      <input
        type="text"
        value={book.publisher}
        name="publisher"
        onChange={handleUpdateBook}
      ></input>
      <input
        type="text"
        value={book.year}
        name="year"
        onChange={handleUpdateBook}
      ></input>
      <button onClick={handleUpdateBookPost}>Update Book</button>
    </div>
  );
}

export default Edit;
