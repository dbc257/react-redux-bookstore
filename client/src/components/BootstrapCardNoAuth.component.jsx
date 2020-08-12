import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { connect } from "react-redux";
import * as actionCreators from "../store/creators/actionCreators";
import Button from "react-bootstrap/Button";
// import { LinkContainer } from "react-router-bootstrap";

const BootstrapCardNoAuth = (props) => {
  // const deletePost = () => {
  //   let id = props.books.id;
  //   fetch("https://react-redux-bookstore-server.herokuapp.com/delete", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ id: id }),
  //   })
  //     .then((res) => res.json())
  //     .then((response) => {
  //       alert(response.message);
  //       props.fetchBooks();
  //     });
  // };

  const handleAddCartBook = () => {
    let cartBook = props.books;
    props.onIncrement();
    props.onAddCartBooks(cartBook);
  };

  // const editLink = "/Edit/" + props.books.id;

  return (
    <>
      <div>
        <Card variant="light" id={props.books.id}>
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
                  <Button onClick={handleAddCartBook}>Add To Cart</Button>
                </Nav.Link>
                {/* <LinkContainer to={editLink}>
                  <Nav.Link>
                    <button>Edit Book</button>
                  </Nav.Link>
                </LinkContainer>
                <Nav.Link>
                  <button onClick={deletePost}>Delete</button>
                </Nav.Link> */}
              </small>
            </Card.Footer>
          ) : null}
        </Card>
      </div>
      <br />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.loginRed.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(actionCreators.incrementCounter()),
    onDecrement: () => dispatch(actionCreators.decrementCounter()),
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
