//import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { connect } from "react-redux";
import * as actionCreators from "../store/creators/actionCreators";
import { LinkContainer } from "react-router-bootstrap";
import React, { useState } from "react";
// import * as actionTypes from "./store/actions/actionTypes";
// import CardDeck from "react-bootstrap/CardDeck";
// import Books from "./Pages/Books.page";
// import Button from "react-bootstrap/Button";
const BootstrapCardNoAuth = (props) => {
  const [books, setBooks] = useState({});

  const deletePost = () => {
    let id = props.books.id;
    fetch("http://localhost:3001/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
        props.fetchBooks();
      });
  };

  // const addBookToCart = () => {
  //   let id = props.books.id;
  //   fetch("http://localhost:3001/cart", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ id: id }),
  //   })
  //     .then((res) => res.json())
  //     .then((response) => {
  //       alert(response.message);
  //       props.fetchCartBooks();
  //     });
  // };
  // let fetchBooks = () => {
  //   fetch("http://localhost:3001/")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setBooks(result);
  //       props.onAddGlobalBooks(result);
  //     });
  // };
  const handleAddCartBook = () => {
    let cartBook = props.books;
    console.log(props);
    props.onIncrement();
    props.onAddCartBooks(cartBook);
  };

  // const handleRemoveCartBook = () => {
  //   let cartBook = props.books;
  //   console.log(props.books);
  //   props.onDecrement();
  //   props.onRemoveCartBooks(cartBook);
  // };

  const editLink = "/Edit/" + props.books.id;

  return (
    <>
      <div>
        <Card id={props.books.id}>
          <Card.Img
            style={{ width: 200 }}
            variant="top"
            src={props.books.imageURL}
            alt="image"
          />
          <Card.Body>
            <Card.Title>{props.books.title}</Card.Title>
            <Card.Text>
              {props.books.genre}
              <br />
              {props.books.publisher}
              <br />
              {props.books.year}
            </Card.Text>
          </Card.Body>
          {props.isLoggedIn ? (
            <Card.Footer>
              <small className="text-muted">
                <Nav.Link>
                  {/* <button onClick={() => props.onIncrement()}> */}
                  <button onClick={handleAddCartBook}>Add To Cart</button>
                </Nav.Link>
                {/* <Nav.Link>
                  <button onClick={handleRemoveCartBook}>
                    Remove From Cart
                  </button>
                </Nav.Link> */}
                <LinkContainer to={editLink}>
                  <Nav.Link>
                    <button>Edit Book</button>
                  </Nav.Link>
                </LinkContainer>
                <Nav.Link>
                  <button onClick={deletePost}>Delete</button>
                </Nav.Link>
              </small>
            </Card.Footer>
          ) : null}
        </Card>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    //cartBooks: state.cartRed.cartBooks,
    //books: state.booksRed.books,
    isLoggedIn: state.loginRed.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(actionCreators.incrementCounter()),
    onDecrement: () => dispatch(actionCreators.decrementCounter()),
    // onAuthenticated: () => dispatch(actionCreators.authenticated()),
    // onAddGlobalBooks: (books) => dispatch(actionCreators.addGlobalBooks(books)),
    onAddCartBooks: (cartBooks) =>
      dispatch(actionCreators.addCartBooks(cartBooks)),
    onRemoveCartBooks: (cartBooks) =>
      dispatch(actionCreators.removeCartBooks(cartBooks)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BootstrapCardNoAuth);
