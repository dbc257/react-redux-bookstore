import React, { useState } from "react";
// import { connect } from "react-redux";
// import * as actionCreators from "../store/creators/actionCreators";

function AddBook(props) {
  const [book, setBook] = useState({});
  let fetchAddBook = () => {
    fetch("https://bookstrap-bookstore-server.herokuapp.com/add-book", {
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
    <div>
      <input
        type="text"
        placeholder="imageURL"
        name="imageURLTextBox"
        onChange={handleAddBook}
      ></input>
      <input
        type="text"
        placeholder="Title"
        name="titleTextBox"
        onChange={handleAddBook}
      ></input>
      <input
        type="text"
        placeholder="Genre"
        name="genreTextBox"
        onChange={handleAddBook}
      ></input>
      <input
        type="text"
        placeholder="Publisher"
        name="publisherTextBox"
        onChange={handleAddBook}
      ></input>
      <input
        type="text"
        placeholder="Year"
        name="yearTextBox"
        onChange={handleAddBook}
      ></input>
      <button onClick={handleAddBookPost}>Add Book</button>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     // global state counter is now available in property called ctr
//     totalCartItems: state.counterRed.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onIncrement: () => dispatch(actionCreators.incrementCounter()),
//     onDecrement: () => dispatch(actionCreators.decrementCounter()),
//   };
// };
export default AddBook;
//export default connect(mapStateToProps, null)(AddBook);
