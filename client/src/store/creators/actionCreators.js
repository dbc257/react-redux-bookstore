import * as actionTypes from "../actions/actionTypes";

export const incrementCounter = () => {
  return {
    type: actionTypes.ADD,
  };
};

export const decrementCounter = () => {
  return {
    type: actionTypes.REMOVE,
  };
};

export const booksLoaded = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/api-books")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({ type: actionTypes.BOOKSLOADED, payload: json });

        // props.onGlobalBooksLoaded(json);
      });
  };
};

export const addGlobalBooks = (books) => {
  return {
    type: actionTypes.ADDGLOBALBOOKS,
    payload: books,
  };
};
export const addCartBooks = (cartBooks) => {
  return {
    type: actionTypes.ADDCARTBOOKS,
    payload: cartBooks,
  };
};

export const removeCartBooks = (cartBooks) => {
  return {
    type: actionTypes.REMOVECARTBOOKS,
    payload: cartBooks,
  };
};

export const authenticated = (auth) => {
  return {
    type: actionTypes.AUTHENTICATED,
    value: auth,
  };
};
