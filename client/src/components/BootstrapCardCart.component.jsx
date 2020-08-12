import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { connect } from "react-redux";
import * as actionCreators from "../store/creators/actionCreators";
import Button from "react-bootstrap/Button";

const BootstrapCardCart = (props) => {
  const handleRemoveCartBook = () => {
    let cartBook = props.books;
    console.log(props);
    props.onDecrement();
    props.onRemoveCartBooks(cartBook);
  };

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
                  <Button onClick={handleRemoveCartBook}>
                    Remove From Cart
                  </Button>
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
    isLoggedIn: state.loginRed.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDecrement: () => dispatch(actionCreators.decrementCounter()),
    onRemoveCartBooks: (cartBooks) =>
      dispatch(actionCreators.removeCartBooks(cartBooks)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BootstrapCardCart);
