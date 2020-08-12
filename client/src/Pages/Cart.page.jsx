import React from "react";
import BootstrapCardCart from "../components/BootstrapCardCart.component";
import CardColumns from "react-bootstrap/CardColumns";
import { connect } from "react-redux";

function CartBooks(props) {
  return (
    <>
      <div className="App container">
        <CardColumns>
          {props.cartBooks.map((bookLoop, index) => {
            return <BootstrapCardCart key={index} books={bookLoop} />;
          })}
        </CardColumns>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cartBooks: state.cartRed.cartBooks,
  };
};

export default connect(mapStateToProps, null)(CartBooks);
