import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function AddBook(props) {
  const [book, setBook] = useState({});
  let fetchAddBook = () => {
    fetch("https://react-redux-bookstore-server.herokuapp.com/add-book", {
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
  };
  function handleAddBook(e) {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  }

  function handleAddBookPost() {
    fetchAddBook();
  }

  return (
    <Card>
      <Card.Header className="text-center" as="h4">
        Add Book
      </Card.Header>
      <Card.Body>
        <InputGroup size="lg">
          <FormControl
            type="text"
            placeholder="Image URL"
            name="imageURLTextBox"
            onChange={handleAddBook}
            required
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <br />
        <InputGroup size="lg">
          <FormControl
            type="text"
            placeholder="Password"
            name="titleTextBox"
            onChange={handleAddBook}
            required
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <br />
        <InputGroup size="lg">
          <FormControl
            type="text"
            placeholder="Genre"
            name="genreTextBox"
            onChange={handleAddBook}
            required
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <br />
        <InputGroup size="lg">
          <FormControl
            type="text"
            placeholder="Publisher"
            name="publisherTextBox"
            onChange={handleAddBook}
            required
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <br />
        <InputGroup size="lg">
          <FormControl
            type="text"
            placeholder="Year"
            name="yearTextBox"
            onChange={handleAddBook}
            required
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
        <br />
        <Card.Text className="text-center">
          <Button variant="primary" size="lg" onClick={handleAddBookPost}>
            Submit
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AddBook;
