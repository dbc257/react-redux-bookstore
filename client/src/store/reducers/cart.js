import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cartBooks: [],
};

const reducer = (state = initialState, action) => {
  // switch
  switch (action.type) {
    case actionTypes.ADDCARTBOOKS:
      return {
        ...state,
        cartBooks: state.cartBooks.concat(action.payload),
      };
    case actionTypes.REMOVECARTBOOKS:
      return {
        ...state,
        cartBooks: state.cartBooks.filter((book) => {
          return book.id != action.payload.id;
        }),
        // action.payload),
      };
  }
  return state;
};

export default reducer;
