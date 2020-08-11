import React from "react";
import BootstrapCardCart from "../components/BootstrapCardCart.component";
import CardDeck from "react-bootstrap/CardDeck";
import { connect } from "react-redux";
// import * as actionCreators from "../store/creators/actionCreators";
// import BootstrapCard from "./components/BootstrapCard.component";
// import Button from "react-bootstrap/Button";
// const [books, setBooks] = useState([]);

function CartBooks(props) {
  // const [cartBooks, setCartBooks] = useState([]);
  // let fetchDisplayBooks = () => {
  //   let displayBooks = props.books.filter((book) => book.id == "4");

  //   setDisplayBooks(displayBooks);
  // };

  // const fetchDisplayBooks = () => {
  // }

  // useEffect(() => {
  //   console.log(props); // fetchDisplayBooks();
  // }, []);

  return (
    <>
      <div className="App container">
        <CardDeck>
          {props.cartBooks.map((bookLoop, index) => {
            return <BootstrapCardCart key={index} books={bookLoop} />;
          })}
        </CardDeck>
      </div>
    </>
  );
}
//   return (
//     <>
//       <button onClick={fetchCartBooks}>fectch cart</button>
//       <div className="App container">
//         {booksDisplay.length > 0 ? <h1>Hello</h1> : null}
//         <CardDeck>
//           {/* {cartBooks.length > 0 ? ({cartBooks.map((cartBookLoop, index) => {
//             return (
//               <BootstrapCardCartBooks
//                 key={index}
//                 cartBooks={cartBookLoop}
//                 fetchBooks={fetchBooks}
//               />
//             );
//           })}): null} */}
//         </CardDeck>
//       </div>
//     </>
//   );
// }

const mapStateToProps = (state) => {
  return {
    cartBooks: state.cartRed.cartBooks,
    // books: state.booksRed.books,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // onIncrement: () => dispatch(actionCreators.incrementCounter()),
//     // onDecrement: () => dispatch(actionCreators.decrementCounter()),
//     onAddGlobalBooks: (books) => dispatch(actionCreators.addGlobalBooks(books)),
//     // onCartBooks: (id) => dispatch(actionCreators.addCartBooks(id)),
//   };
// };

//export default CartBooks;

export default connect(mapStateToProps, null)(CartBooks);

// let fetchBooks = () => {
//   fetch("https://react-redux-bookstore-server.herokuapp.com/")
//     .then((response) => response.json())
//     .then((result) => {
//       setBooks(result);
//     });
// };

// function CartBooks(props) {
//   const [books, setBooks] = useState([]);
//   let fetchCartBooks = () => {
//     fetch("https://react-redux-bookstore-server.herokuapp.com/cart")
//       .then((response) => response.json())
//       .then((result) => {
//         setCartBooks(result);
//         // props.onAddBooksToGlobalState(result);
//       });
//   };

// const [booksDisplay, setBooksDisplay] = useState([]);

// useEffect(() => {
//   fetchBooks();
// }, []);

// const fetchBooks = () => {
//   fetch("https://react-redux-bookstore-server.herokuapp.com/")
//     .then((response) => response.json())
//     .then((result) => {
//       setBooks(result);
//       // props.onCartBooks(result);
//     });
//   // .then(() => {
//   //   fetchCartBooks();
//   // });
// };
