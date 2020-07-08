import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cartBooks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADDCARTBOOKS: {
      return {
        ...state,
        cartBooks: state.cartBooks.concat(action.payload),
      };
    }
    case actionTypes.REMOVECARTBOOKS: {
      return {
        ...state,
        cartBooks: state.cartBooks.filter((book) => {
          return book.id !== action.payload.id;
        }),
      };
    }
    default:
      return state;
  }
};

export default reducer;
