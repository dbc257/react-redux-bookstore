import * as actionTypes from "../store/actions/actionTypes";

// initialize the global state values
const initialState = {
  counter: 0,
  books: [],
  cartBooks: [],
  isAuthenicated: false,
};

const reducer = (state = initialState, action) => {
  // switch
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + 1,
      };

    case actionTypes.REMOVE:
      return {
        ...state,
        counter: state.counter - 1,
      };

    case actionTypes.ADDGLOBALBOOK:
      return {
        ...state,
        books: state.books.concat(action.payload),
      };
    case actionTypes.ADDCARTBOOK:
      return {
        ...state,
        cartItems: state.cartItems.concat(action.payload),
      };
    case actionTypes.AUTHENTICATED:
      return {
        ...state,
        isAuthenicated: action.value,
      };
  }

  return state;
};

export default reducer;
