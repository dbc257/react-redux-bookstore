import React, { useState, useEffect } from "react";
import BootstrapCardNoAuth from "../components/BootstrapCardNoAuth.component";
import CardDeck from "react-bootstrap/CardDeck";
//import { connect } from "react-redux";
//import * as actionCreators from "../store/creators/actionCreators";

function HomeNoAuth() {
  const [books, setBooks] = useState([]);
  // const [cartBooks, setCartBooks] = useState([]);
  let fetchBooks = () => {
    fetch("https://bookstrap-bookstore-server.herokuapp.com/")
      .then((response) => response.json())
      .then((result) => {
        // props.onAddGlobalBooks(result);
        setBooks(result);
        // console.log(result);
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
//     //     counter: state.counterRed.counter,
//     //     isLoggedIn: state.loginRed.isLoggedIn,
//     // books: state.booksRed.books,
//     // cartBooks: state.cartRed.cartBooks,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // onIncrement: () => dispatch(actionCreators.incrementCounter()),
//     // onDecrement: () => dispatch(actionCreators.decrementCounter()),
//     //onAuthenticated: () => dispatch(actionCreators.authenticated()),
//     //onAddGlobalBooks: (books) => dispatch(actionCreators.addGlobalBooks(books)),
//   };
// };
export default HomeNoAuth;
// export default connect(mapDispatchToProps, null)(HomeNoAuth);
